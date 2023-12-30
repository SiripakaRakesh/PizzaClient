import React, { useEffect, useState } from "react";
import CustomPizza from "./CustomPizza";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PizzaServices from '../../pages/PizzaServices';
import AddToCartServices from '../../pages/AddToCartServices';
import PayPizzaService from '../../pages/PayPizzaServices';
import '../../Styles/UserPizzaList.css';
import Footer1 from "../static/Footer";


const UserPizzaList = () => {
  const [pizzas, setPizzas] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const { status } = location.state || { status: false };
  console.log(status);



  useEffect(() => {
    getPizzas();
  },);



  const getPizzas = async () => {
    let result = await PizzaServices.getPizzas();
    setPizzas(result);
    console.log(pizzas);
  }

  const addToCart = async (pizza) => {
    const user = localStorage.getItem('user');
    const parsedUser = JSON.parse(user);
    const userId = parsedUser._id;
    alert(`1 ${pizza.name} added to cart`);

    try {
      const data = {
        name: pizza.name,
        price: pizza.price,
        category: pizza.category,
        ingredients: pizza.ingredients,
        pizzaImage: pizza.pizzaImage,
        userId: userId, // Replace with the actual user ID
        // Remove the time property from the data object
        // time: new Date(),
      };

      let result = await AddToCartServices.addToCart(data);
      console.log(result);
      setSuccessMessage("Pizza added to cart successfully!");
      setTimeout(() => {
        setSuccessMessage("");
      }, 2000); // Hide the success message after 2 seconds
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const addPayPizza = async (pizza) => {
    const user = localStorage.getItem('user');
    const parsedUser = JSON.parse(user);
    const userId = parsedUser._id;

    try {
      const data = {
        name: pizza.name,
        price: pizza.price,
        category: pizza.category,
        ingredients: pizza.ingredients,
        pizzaImage: pizza.pizzaImage,
        orderId: pizza._id,
        userId: userId, // Replace with the actual user ID
        // Remove the time property from the data object
        // time: new Date(),
      };

      let result = await PayPizzaService.addPayPizza(data);
      console.log(result);
      setSuccessMessage("Pizza added to cart successfully!");
      setTimeout(() => {
        setSuccessMessage("");
      }, 2000); // Hide the success message after 2 seconds
    } catch (error) {
      console.error("Error:", error);
    }
  };


  const handlePayNow = (pizza) => {
    // Calculate the total price and prepare the pizza items
    const totalPrice = pizza.price;
    const pizzaItems = [{
      name: pizza.name,
      category: pizza.category,
      price: pizza.price,
      id: pizza._id,
      orderStatus: false

    }];

    // Prepare the data to be passed to the next component
    const paymentData = {
      total: totalPrice,
      pizzaItems: pizzaItems,
      // Add other relevant data as needed
    };

    addPayPizza(pizza);

    // Navigate to the next component and pass the data
    navigate("/pay/now", { state: paymentData });
  };

  const searchHandle = () => {

  };

  return (
    <div className="container-pizza-list">
      <div className="top">
        <h1>Pizza List</h1>
        <div className="line" style={lineStyle}>
          <input
            type="text"
            className="form-control search-product-box mb-4"
            placeholder="Search Product"
            onChange={searchHandle}
          />
          <Link to='/add-to-cart' style={linkStyle}>Check Out</Link>
        </div>
      </div>
      {successMessage && (
        <div className="alert alert-success text text-dark bg-success">{successMessage}</div>
      )}
      <div className="row">
        {pizzas.length > 0 ? (
          pizzas.map((item, index) => (
            <div className="cards" key={item._id}>
              <div className="card">
                <img
                  src={item.pizzaImage}
                  className="card-img-top"
                  alt={item.name}
                />
                <div className="card-content">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Price: $ {item.price}</p>
                  <p className="card-text">Category: {item.category}</p>
                  <p className="card-text">Ingredients: {item.ingredients}</p>
                  <div className="btn-group">
                    <button className="btn btn-primary mr-5 " onClick={() => addToCart(item)} >
                      Add To Cart
                    </button >
                    <button className="btn btn-danger " onClick={() => handlePayNow(item)} >
                      Pay
                    </button >
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-primary">No Results Found</h1>
        )}
      </div>
      <div>
        <CustomPizza />
      </div>
      <div>
        <Footer1 />
      </div>
    </div>
  );
}

export default UserPizzaList;

const linkStyle = {
  backgroundColor: '#f8d929',
  textDecoration: 'none',
  padding: '7px 15px',
  marginTop: '50px',
  color: 'white',
};

const lineStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};