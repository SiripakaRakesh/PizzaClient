import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../Styles/Payment.css';

const PayNow = () => {
    const navigate =useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [mobile, setMobile] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      handlePayment();
    };

    const handlePayment = async () => {
      navigate('payment/component')
      };
      
  return (
    <div className="pay-now">
      <div className="container">
        <h3>Pay Now</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address:</label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">Mobile:</label>
            <input
              type="tel"
              className="form-control"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
          <button type="submit">
            <Link to='/payment/component' style={{textDecoration:'none', color: '#fff'}}>Proceed to Next Page</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default PayNow;