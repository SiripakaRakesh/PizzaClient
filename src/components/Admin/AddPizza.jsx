import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminPizzaServices from "../../pages/PizzaServices";
import '../../Styles/Pizza.css';

const AddPizza = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [pizzaImage, setPizzaImage] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const pizzaOptions = ["Pizza-1", "Pizza-2", "Pizza-3", "Pizza-4", "Pizza-5"];
  const pizzaCategory = ["Veg", "Non-Veg"];
  const pizzaImages = [
    "https://images.unsplash.com/photo-1516697073-419b2bd079db?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA1NjkyNTd8&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA1NjkyNTd8&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1604917869287-3ae73c77e227?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA1NjkyNTd8&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1638591052401-f26d77f2fd6a?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA1NzU5NzF8&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1571066811602-716837d681de?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA1NzU5NzF8&ixlib=rb-4.0.3&q=85"
  ];
  const pizzaIngredients = ["I-1", "I-2", "I-3", "I-4", "I-5"];
  const pizzaPrice = ['99', '199', '299', '399', '499'];

  const addPizza = async () => {
    if (!name || !price || !category || !ingredients || !pizzaImage) {
      setError(true);
      return false;
    }
    console.log(name, price, category, ingredients, pizzaImage);

    try {
      const result = await AdminPizzaServices.addPizza(name, price, category, ingredients, pizzaImage);
      if (result) {
        navigate('/admin/pizza-list');
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container-add-pizza">
      <div className="text-center">
        <h2>Add Pizza</h2>
      </div>
      <div className="form-items">
        <div className="form-group">
          <select className="form-control" value={name} onChange={(e) => { setName(e.target.value); }}>

            <option value="">Select Pizza Name</option>
            {pizzaOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select><br />
          {error && !name && <span className="invalid-input">Enter Valid Name</span>}

        </div>
        <div className="form-group">
          <select className="form-control  " value={price} onChange={(e) => { setPrice(e.target.value); }}>
            <option value="">Select Pizza Price</option>
            {pizzaPrice.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select><br />
          {error && !price && <span className="invalid-input">Enter Price</span>}
        </div>
        <div className="form-group">
          <select className="form-control " value={category} onChange={(e) => { setCategory(e.target.value); }}>
            <option value="">Select Pizza Category</option>
            {pizzaCategory.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select><br />
          {error && !category && <span className="invalid-input">Enter Category</span>}
        </div>
        <div className="form-group">
          <select className="form-control" value={pizzaImage} onChange={(e) => { setPizzaImage(e.target.value); }}>
            <option value="">Select Pizza Image</option>
            {pizzaImages.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select><br />
          {error && !pizzaImage && <span className="invalid-input">Enter Image</span>}
        </div>
        <div className="form-group">
          <select className="form-control" value={ingredients} onChange={(e) => { setIngredients(e.target.value); }}>
            <option value="">Select Pizza Ingredients</option>
            {pizzaIngredients.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select><br />
          {error && !ingredients && <span className="invalid-input">Enter Ingredients</span>}
        </div>
      </div>
      <div className="text-center ">
          <button type="button" onClick={addPizza}>Add Pizza</button>
        </div>
    </div>


  )
}

export default AddPizza;