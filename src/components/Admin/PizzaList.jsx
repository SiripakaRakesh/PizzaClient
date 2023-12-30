import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Ingredients from "./Ingredients";
import PizzaServices from "../../pages/PizzaServices";
import '../../Styles/Pizza.css';
import { FaCaretRight, FaRupeeSign} from 'react-icons/fa'

const PizzaList = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    getPizza();
  },);

  const getPizza = async () => {
    let result = await PizzaServices.getPizzas();
    setPizzas(result);
    console.log(pizzas);
  }

  const deletePizza = async (id) => {
    console.log(id);
    let result = await PizzaServices.deletePizza(id);
    if (result) {
      getPizza();
    }
  };

  const searchHandle = async (event) => {
    console.log("Search");
    let key = event.target.value;
    if (key) {
      let result = await PizzaServices.searchHandle(key);
      if (result) {
        setPizzas(result);
      }
    } else {
      getPizza();
    }

  }
  return (
    <div className="container">
      <h1>Available Pizza List</h1>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search Product"
        onChange={searchHandle}
      />

      <div className="row">
        {pizzas.length > 0 ? (
          pizzas.map((item) => (
            <div className="card-item" key={item._id}>
              <div className="cards">
                <div className="card">
                  <img
                    src={item.pizzaImage}
                    alt={item.name}
                  />

                  <div className="card-content">
                    <h5>{item.name}</h5>
                    <p><FaRupeeSign/>{item.price}</p>
                    <p>{item.category}</p>
                    <p>{item.ingredients}</p>

                    <div className="buttons">
                      <button
                        className="btn btn-danger"
                        onClick={() => deletePizza(item._id)}
                      >
                        Delete
                      </button>
                      <button className="btn btn-success ">
                        <Link className="text-white" to={"/admin/update/pizza/" + item._id}>Update <FaCaretRight/></Link>
                      </button>
                    </div>
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
        <Ingredients />
      </div>
    </div>
  );

}

export default PizzaList;
