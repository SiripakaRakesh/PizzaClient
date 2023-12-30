import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';
import { FaCogs, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  const auth = localStorage.getItem("user");
  const user = auth ? JSON.parse(auth) : null;

  const logout = () => {
    localStorage.clear("user");
    navigate("/");
  };

  const admin = () => {
    if (user && user._id && user.name) {
      const { _id, name } = user;

      const isAdmin = auth && _id === "6561b43854ae9303dc19e754" && name === "Admin";
      if (isAdmin) {
        return (
          <>
            <div className="admin">
              <ul className="admin_navigation" style={{ display: 'flex', listStyle: 'none', gap: '30px' }}>
                <li>
                  <button style={buttonStyle}>
                    {" "}
                    <Link to="/admin/pizza-list">All Pizza</Link>
                  </button>
                </li>
                <li>
                  <button style={buttonStyle}>
                    {" "}
                    <Link to="/admin/add-pizza">Add Pizza</Link>
                  </button>
                </li>
                <li>
                  <button style={buttonStyle}>
                    <Link to="/custom-pizza">Custom Pizza</Link>
                  </button>
                </li>

                <li>
                  <button style={buttonStyle}>
                    <Link onClick={logout} to="/">
                      Logout
                    </Link>
                  </button>
                </li>
                <li>
                  <button style={buttonStyle}>
                    <Link to='admin/inventory'>Inventory <span><FaCogs /></span></Link>
                  </button>
                </li>
              </ul>
              <p>Welcome {JSON.parse(auth).name}</p>
            </div>
          </>
        );
      } else {
        return (
          <>
            <div className="admin-log">
              <ul className="navigate-ul">
                <li >
                  <button>
                    <Link to="user/pizza-list"> Pizza list</Link>
                  </button>
                </li>

                <li >
                  <button>
                    <Link to="/add-to-cart" style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>Cart <span style={{ fontSize: '18px' }}><FaShoppingCart /></span></Link>
                  </button>
                </li>
                <li >
                  <button>
                    <Link onClick={logout} to="/login">
                      Logout
                    </Link>
                  </button>
                </li>
              </ul>
              <p>Welcome {JSON.parse(auth).name}</p>
            </div>
          </>
        );
      }
    }

    <></>;
  };

  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <img
            src='https://images.unsplash.com/photo-1564936281291-294551497d81?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDA3NDM5Mzh8&ixlib=rb-4.0.3&q=85'
            className="logo"
            alt="logo"
          />
          <p style={{color:'ButtonText'}}>Lucky<span>Pizza</span> Hub</p>
        </div>
        {auth ? (
          admin()
        ) : (
          <ul className="nav-ul nav-right">
            <li>
              <button>
                <Link to="/signUp">Sing Up</Link>
              </button>
            </li>

            <li>
              <button>
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default Navbar;

const buttonStyle = {
  padding: '7px 15px',
}
