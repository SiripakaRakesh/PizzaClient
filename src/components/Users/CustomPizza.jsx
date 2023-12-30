import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PaymentComponent from "../Payment/PaymentComponent";
import CountServices from "../../pages/CountServices";
import CustomPizzaServices from "../../pages/CustomPizzaServices";
import '../../Styles/Pizza.css';

const CustomPizza = () => {
  const [options, setOptions] = useState({
    base: "",
    sauce: "",
    cheese: "",
    Veggies: "",
  });
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [pizzaName, setPizzaName] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    getCount();
  }, );

  const pizzaOptions = {
    base: [
      { name: "Classic Thin Crust", price: 8.99 },
      { name: "New York-Style Crust", price: 9.99 },
      { name: "Chicago-Style Crust", price: 10.99 },
      { name: "Multigrain Crust", price: 11.99 },
      { name: "Stuffed Crust", price: 12.99 },
    ],
    sauce: [
      { name: "Classic Tomato Sauce", price: 0.99 },
      { name: "Buffalo Sauce", price: 1.99 },
      { name: "Pesto Sauce", price: 2.99 },
      { name: "Alfredo Sauce", price: 3.99 },
      { name: "Barbecue Sauce", price: 4.99 },
    ],
    cheese: [
      { name: "Mozzarella", price: 1.99 },
      { name: "Fontina", price: 2.99 },
      { name: "Parmesan", price: 3.99 },
      { name: "Ricotta", price: 4.99 },
      { name: "Gorgonzola", price: 5.99 },
    ],
    Veggies: [
      { name: "Bell Peppers", price: 0.5 },
      { name: "Red Onions", price: 0.75 },
      { name: "Mushrooms", price: 0.9 },
      { name: "Spinach", price: 1.25 },
      { name: "Cherry Tomatoes", price: 1.5 },
    ],
  };

  const handleChange = (category, value) => {
    setOptions((prevOptions) => ({ ...prevOptions, [category]: value }));
    setError(false);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    Object.keys(options).forEach((category) => {
      const selectedOption = pizzaOptions[category].find(
        (item) => item.name === options[category]
      );
      if (selectedOption) {
        totalPrice += selectedOption.price;
      }
    });
    return totalPrice.toFixed(2);
  };

  const getCount = async () => {
    let result = await CountServices.getCount();
    setCount(result >= 10 ? 1 : result);
    if (result >= 10) {
      CountServices.updateCount();
    }
    console.log(count);
  };

  const addCount = async () => {
    try {
      let result = await CountServices.addCount(count);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const addCustomPizza = async () => {
    const price = calculateTotalPrice();

    addCount();
    const userId = JSON.parse(localStorage.getItem("user"))._id;

    if (Object.values(options).some((value) => !value)) {
      setError(true);
      return;
    }

    console.log(options.base, options.sauce, options.cheese, options.Veggies, price, userId);

    try {
      let result = await CustomPizzaServices.addCustomPizza(
        options.base,
        options.sauce,
        options.cheese,
        options.Veggies,
        price,
        userId
      );
      console.log(result);

      if (result) {
        setPizzaName(`${options.base} Pizza`);
        setTotalPrice(price);
        setShowPayment(true);
      }

      const pizzaItems = [
        {
          name: "Pizza",
          category: "Mixed",
          price: price,
          orderStatus: false,
        },
      ];

      const paymentData = {
        total: price,
        pizzaItems: pizzaItems,
        costume: true,
      };

      navigate("/user/order-pizza", { state: paymentData });
    } catch (error) {
      console.error(error);
    }
  };

  if (showPayment) {
    return (
      <PaymentComponent
        total={totalPrice}
        pizzaItems={[{ name: pizzaName, category: "", price: totalPrice }]}
      />
    );
  }

  return (
    <div className="custom-pizza-container">
      <div className="custom-pizza-form">
        <h3 className="title">
          <img
            src="https://images.unsplash.com/photo-1572552635104-daf938e0aa1f?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA1ODYyOTl8&ixlib=rb-4.0.3&q=85"
            alt=""
          />
          Custom Pizza
          <img
            src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA1ODYyOTl8&ixlib=rb-4.0.3&q=85"
            alt=""
          />
        </h3>

        <div className="option-selection">
          {Object.keys(options).map((category) => (
            <div key={category} className="option">
              <select
                className="form-control"
                value={options[category]}
                onChange={(e) => handleChange(category, e.target.value)}
              >
                <option value="">Select Pizza {category}</option>
                {pizzaOptions[category].map((option) => (
                  <option key={option.name} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </select>
              {error && !options[category] && (
                <span className="invalid-input">Enter Valid {category}</span>
              )}
            </div>
          ))}
        </div>

        <button type="button" onClick={addCustomPizza} className="btn btn-primary">
          Order Now
        </button>
      </div>

      <div className="summary-section">
        <h2 className="">Summary:</h2>
        {Object.keys(options).map((category) => (
          <h3 key={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}: {options[category]}
          </h3>
        ))}
        <h4>Total Price: ${calculateTotalPrice()}</h4>
      </div>

      <div className="images">
        <Link to='/user/pizza-list'>
          <img src="https://images.unsplash.com/photo-1601237015808-16fc98c57879?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA1ODk1NTJ8&ixlib=rb-4.0.3&q=85" alt="" />
        </Link>
        <Link to='/user/pizza-list'>
          <img src="https://images.unsplash.com/photo-1596818531679-96ef98b9a497?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA1ODk1NTJ8&ixlib=rb-4.0.3&q=85" alt="" />
        </Link>
        <Link to='/user/pizza-list'>
          <img src="https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA1ODk1NTJ8&ixlib=rb-4.0.3&q=85" alt="" />
        </Link>
        <Link to='/user/pizza-list'>
          <img src="https://images.unsplash.com/photo-1550401728-539ebf40d9e9?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA1ODk1NTJ8&ixlib=rb-4.0.3&q=85" alt="" />
        </Link>
        <Link to='/user/pizza-list'>
          <img src="https://images.unsplash.com/photo-1632641736564-5dfa53a68a6b?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA1ODk1NTJ8&ixlib=rb-4.0.3&q=85" alt="" />
        </Link>
        <Link to='/user/pizza-list'>
          <img src="https://images.unsplash.com/photo-1617343251257-b5d709934ddd?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA1ODk1NTJ8&ixlib=rb-4.0.3&q=85" alt="" />
        </Link>
        <Link to='/user/pizza-list'>
          <img src="https://images.unsplash.com/photo-1605346210866-21ae863894bb?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA1ODk1NTJ8&ixlib=rb-4.0.3&q=85" alt="" />
        </Link>
        <Link to='/user/pizza-list'>
          <img src="https://images.unsplash.com/photo-1601924567521-c18b82b81b09?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA1ODk1NTJ8&ixlib=rb-4.0.3&q=85" alt="" />
        </Link>
        <Link to='/user/pizza-list'> <img src="https://images.unsplash.com/photo-1564936281291-294551497d81?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA1ODk1NTJ8&ixlib=rb-4.0.3&q=85" alt="" />
        </Link>
        <Link to='/user/pizza-list'>
          <img src="https://images.unsplash.com/photo-1593504049359-74330189a345?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA1ODk1NTJ8&ixlib=rb-4.0.3&q=85" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default CustomPizza;
