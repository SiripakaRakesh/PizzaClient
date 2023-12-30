import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddToCartServices from "../../pages/AddToCartServices";
import PayManyPizzaServices from '../../pages/PayMorePizzaServices'
import '../../Styles/AddToCart.css';

const AddToCart = () => {
  const [addToCartPizza, setAddToCartPizzaList] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getAddToCartPizza();
  }, [])

  const getAddToCartPizza = async () => {
    const user = localStorage.getItem('user');
    const { _id } = JSON.parse(user);
    try {
      let result = await AddToCartServices.getAddToCartPizza(_id);
      setAddToCartPizzaList(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteAddToCartPizza = async (id) => {
    console.log(id);
    alert(`Removing  pizza from cart`);
    try {
      let result = await AddToCartServices.deleteAddToCartPizza(id);
      if (result) {
        setSuccessMessage("Pizza removed from cart successfully!");
        getAddToCartPizza();
        setTimeout(() => {
          setSuccessMessage("");
        }, 2000); // Hide the success message after 2 seconds
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCancel = () => {
    try {
      AddToCartServices.clearAllItemsFromCart();
      setSuccessMessage('All items removed successfully');
      setAddToCartPizzaList([]);
      setTimeout(() => {
        setSuccessMessage('');
        navigate('/user/pizza-list');
      }, 2000);
    }catch(error){
      console.error(error);
    }
  }

  const handlePayNow = async () => {
    // Calculate the total price and prepare the pizza items
    const totalPrice = addToCartPizza.reduce((total, item) => total + item.price, 0);
    const ok = true;
    const pizzaItems = addToCartPizza.map((item) => ({
      name: item.name,
      category: item.category,
      price: item.price,
      orderStatus: false
    }));
    const user = localStorage.getItem('user');
    const { _id } = JSON.parse(user);
    //const orderId = Date.now().toString(); 
    const paymentData = {
      total: totalPrice,
      pizzaItems: pizzaItems,
      userId: _id,
      ok: ok,

    };
    //orderAcceptedStatus(orderId,_id);
    try {
      let result = await PayManyPizzaServices.handlePayNow(paymentData);
      if (result) {
        console.log("Data stored in PayPizza collection:", result);
        navigate("/pay/now", { state: paymentData });
      }


    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container-cart">
      {/* <h3 className="text text-center">Card Pizza List</h3> */}
      {successMessage && (
        <div className="notice">
          {successMessage}
        </div>
      )}
      <div className="content">

        {addToCartPizza.length > 0 ? (
          addToCartPizza.map((item, index) => (
            <div className="cards" key={item._id}>
              <div className="card-component">
                <img
                  src={item.pizzaImage}
                  alt={item.name}
                />
                <div className="card-content">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Category: {item.category}</p>
                  <p className="card-text">Ingredients: {item.ingredients}</p>
                  <p className="card-text">
                    Time and Date: {new Date(item.time).toLocaleString()}
                  </p>
                  <p className="card-text">Total Price: ${item.price}</p>
                  <button
                    onClick={() => deleteAddToCartPizza(item._id)}
                    className="btn btn-warning"
                  >
                    Remove From Cart
                  </button>

                </div>
              </div>

            </div>

          ))

        ) : (
          <div className="notice">
            <p className="text-primary">No Items Found in your cart! Go shop!!</p>
            <Link to='/user/pizza-list'>Go Shop</Link>
          </div>
        )}
      </div>
      <div className="top">
        <button onClick={() => handleCancel()}>
          Cancel
        </button>
        <button onClick={() => handlePayNow()}>
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default AddToCart;