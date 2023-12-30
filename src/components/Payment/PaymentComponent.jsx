import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PayManyPizzaServices from '../../pages/PayMorePizzaServices';
import PayPizzaService from '../../pages/PayPizzaServices';
import CustomPizzaServices from '../../pages/CustomPizzaServices';
import io from "socket.io-client";
import '../../Styles/Payment.css'

const PaymentComponent = () => {
  const location = useLocation();
  const navigate =useNavigate();

  const socket =io.connect("http://127.0.0.1:7000");

  const { total, pizzaItems, ok, custom } = location.state;
  
  const deleteCustomPizza = async (total) => {
    console.log("total :- " + total);
    try {
      let result = await CustomPizzaServices.deleteCustomPizza(total);
      if (result) {
        console.log(result);
        navigate('user/pizza-list');
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
   
  const deletePizza = async (total) => {
    console.log("total :- "+ total);
    try {
      let result = await PayPizzaService.deletePizza(total);
      if (result) {
         console.log(result);
         navigate('user/pizza-list')
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  const deleteManyPayPizza = async (total) => {
    try {
      let result = await PayManyPizzaServices.deleteManyPayPizza(total);
      if (result) {
        console.log("PayPizza documents deleted:", result);
        navigate("user/pizza-list");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleGoBack = () => {
    // Call the deletePayPizza function with the total value
    console.log("OrderStatus:-"+pizzaItems[0].orderStatus);
    deleteManyPayPizza(total);
  };
  const handleGoCancel = () => {
    // Call the deletePayPizza function with the total value
    console.log("OrderStatus:-"+pizzaItems[0].orderStatus);
    deletePizza(total);
  };
  const handleGoCancelCustomOrder = () => {
    // Call the deletePayPizza function with the total value
    console.log("OrderStatus:-"+pizzaItems[0].orderStatus);
    deleteCustomPizza(total);
    navigate('/custom-pizza')
  };

 //Payment Concept:- 
   const handleOpenRazorpay=(data)=>{
               const options={
                key:'rzp_test_wh1FtnCd5Mu5qn',
                amount:data.amount,
                currency:data.currency,
                name:'Pizza App',
                description:'XYZ',
                order_id:data.id,
                handler:function (response){
                 console.log(response,"85");
                 axios.post('http://127.0.0.1:7000/verify',{response:response})
                 .then(res=>{
                  console.log(res,"37")
                  let status=true;
                  socket.emit('success',{data:'Success',room:data.id});
                  navigate("user/pizza-list", { state: { status:true } });
                  return status;
                 })
                 .catch(err => {
                  console.log(err);
                })
              },
             
               };
               const rzp=new window.Razorpay(options);
               rzp.open();
   }

   const handlePayment =(amount) => {
    const _data={amount:amount}
    axios.post('http://127.0.0.1:7000/orders',_data)
    .then(res=>{
      console.log(res.data,"99");
      handleOpenRazorpay(res.data.data);

    })
    .catch(err => {
      console.log(err);
    })
   }

  return (
    <div className="container-payment">
      <div className="payment">
        <div className="cards">
          <div className="card">
            <h3>
              Payment
            </h3>
            <div className="card-content">
              <h3>
                Total Amount Pay :- {total}
              </h3>
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {pizzaItems.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.category}</td>
                      <td>{item.price}</td>
                      <td>
                        {" "}
                        <tr></tr>
                      </td>
                    </tr>
                  ))}
                  <tr className="text text-danger">
                    <td></td>
                    <td></td>
                    <td>
                      <b>Total Price</b>
                    </td>
                    <td>
                      <b>{total}</b>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="buttons">
                {custom ? (
                  <button
                    onClick={handleGoCancelCustomOrder}
                  >
                    Custom
                  </button>
                ) : ok ? (
                  <button
                    onClick={handleGoBack}
                  >
                    Back
                  </button>
                ) : (
                  <button
                    onClick={handleGoCancel}
                  >
                    Cancel
                  </button>
                )}
                <button
                  onClick={()=>handlePayment(total)}
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentComponent;