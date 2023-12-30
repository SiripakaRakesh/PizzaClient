import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminIngredientsServices from "../../pages/AdminIngredientsServices";
import '../../Styles/Pizza.css';

const UpdateIngredients = () => {

  const [base, setBase] = useState("");
  const [cheese, setCheese] = useState("");
  const [Veggies, setVeggies] = useState("");
  const [sauce, setSauce] = useState("");
  const [error, setError] = useState(false);


  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    console.log(params);
    getIngredientsDetails();
  },);


  const getIngredientsDetails = async () => {
    try {
      const result = await AdminIngredientsServices.getIngredientsDetails(params.id);
      setBase(result.base);
      setCheese(result.cheese);
      setSauce(result.sauce);
      setVeggies(result.Veggies);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const updateIngredients = async () => {

    if (!base || !cheese || !Veggies || !sauce) {
      setError(true);
      return false;
    }
    console.log(base, cheese, Veggies, sauce);
    let result = await AdminIngredientsServices.updateIngredients(params.id, base, cheese, Veggies, sauce);
    console.log(result);
    if (result) {
      navigate('/admin/pizza-list');
    }

  }

  return (
    <div className="container-update">
      <div className="text-center">
        <h3>Update Ingredients</h3>
      </div>
      <div className="ingredients">
        <div className="form-group">
          <label htmlFor="base">Number Of Base</label>
          <input type="text" className="form-control" id="base" value={base} onChange={(e) => { setBase(e.target.value); }} placeholder="Number Of Base" />
          {error && !base && <span className="invalid-input">Enter Base</span>}
        </div>
        <div className="form-group">
          <label htmlFor="cheese">Number of Cheese</label>
          <input type="text" className="form-control" id="cheese" value={cheese} onChange={(e) => { setCheese(e.target.value); }} placeholder="Number of Cheese" />
          {error && !cheese && <span className="invalid-input">Enter Cheese</span>}
        </div>
        <div className="form-group">
          <label htmlFor="sauce">Number Of Sauce</label>
          <input type="text" className="form-control" id="sauce" value={sauce} onChange={(e) => { setSauce(e.target.value); }} placeholder="Number Of Sauce" />
          {error && !sauce && <span className="invalid-input">Enter Sauce</span>}
        </div>
        <div className="form-group">
          <label htmlFor="veggies">Number of Veggies</label>
          <input type="text" className="form-control" id="veggies" value={Veggies} onChange={(e) => { setVeggies(e.target.value); }} placeholder="Number of Veggies" />
          {error && !Veggies && <span className="invalid-input">Enter Veggies</span>}
        </div>
        <div className="text-center">
          <button type="button" onClick={updateIngredients} className="btn btn-primary appButton">Update Ingredients</button>
        </div>
      </div>
    </div>


  )

}

export default UpdateIngredients;