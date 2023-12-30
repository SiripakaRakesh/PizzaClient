import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminIngredientsServices from "../../pages/AdminIngredientsServices";
import CountServices from "../../pages/CountServices";
import io from "socket.io-client";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [count, setCount] = useState(0);
  const socket = io.connect("http://127.0.0.1:7000");
 
  useEffect(() => {
    getIngredients();
    getCount();
  }, );

  const getCount = async () => {
    try {
      const result = await CountServices.getCount();
      setCount(result);
      console.log(count);
    } catch (error) {
      console.error(error);
    }
  };

  const getIngredients = async () => {
    try {
      const data = await AdminIngredientsServices.getIngredients();
      setIngredients(data);
      console.log(ingredients);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteIngredient = async (id) => {
    try {
      const result = await AdminIngredientsServices.deleteIngredient(id);
      if (result) {
        getIngredients();
      }
    } catch (error) {
      console.error(error);
    }
  };
 
 const sendEmailToAdmin = (ingredients) => {
   console.log(" ingredients: " + ingredients);
   const auth = localStorage.getItem("user");
   const user = JSON.parse(auth);

   socket.emit("limit", {
     data: `Pizza ${ingredients} availability less than 10`,
     userEmail: user.email,
   });
 };
  
 

  return (
    <div className="container bg-white p-4 mb-5">
      <h3>Available Ingredients List</h3>
      {ingredients.length > 0 ? (
        ingredients.map((item, index) =>
          {
            if (item.base - count < 10) {
              
              sendEmailToAdmin("Base");
        
             
            }
            if (item.sauce - count < 10) {
              sendEmailToAdmin("Sauce");
            }
            if (item.cheese - count < 10) {
              sendEmailToAdmin("Cheese");
            }
            if (item.Veggies - count < 10) {
              sendEmailToAdmin("Veggies");
            }
          
        return (
          <div
            className="d-flex align-items-center justify-content-between  p-2 mb-3"
            key={item._id}
          >
            <div className="card shadow rounded p-3" >
              <div className="d-flex flex-column text text-center" >
              <span>Base</span>
                <span
                  className={`font-weight-bold ${
                    item.base - count < 10 ? "text-danger" : ""
                  }`}
                >
                  {item.base - count < 10 ? "<10" : item.base - count}
                </span>
                
              </div>
            </div>
            <div className="card shadow rounded p-3" >
              <div className="d-flex flex-column text text-center"  > 
              <span >Sauce</span>
                <span
                  className={`font-weight-bold ${
                    item.sauce - count < 10 ? "text-danger" : ""
                  }`}
                >
                  {item.sauce - count < 10
                    ?  "<10" 
                    : item.sauce - count}
                </span>
                
              </div>
            </div>
            <div className="card shadow rounded p-3" >
              <div className="d-flex flex-column text text-center" >
              <span>Cheese</span>
                <span
                  className={`font-weight-bold ${
                    item.cheese - count < 10 ? "text-danger" : ""
                  }`}
                >
                  {item.cheese - count < 10
                    ?  "<10" 
                    : item.cheese - count}
                </span>
                
              </div>
            </div>
            <div className="card">
              <div className="d-flex flex-column text text-center">
              <span>Veggies</span>
                <span
                  className={`font-weight-bold ${
                    item.Veggies - count < 10 ? "text-danger" : ""
                  }`}
                >
                  {item.Veggies - count < 10
                    ?  "<10" 
                    : item.Veggies - count}
                </span>
               
              </div>
            </div>

            <div>
              <button onClick={() => deleteIngredient(item._id)} className="btn btn-danger mr-2">Delete</button>
              <button className="btn btn-primary">
                <Link
                  to={"/admin/update/ingredients/" + item._id}
                  className="text-white"
                >
                  Update
                </Link>
              </button>
            </div>
          </div>
        );
                  })
      ) : (
        <h1 className="text-primary">No Results Found</h1>
      )}
    </div>
  );
};

export default Ingredients;


