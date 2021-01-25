import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartSvg from "../static/svg/shopping-cart-solid.svg";
import { DataContext } from "./DataProvider";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const value = useContext(DataContext);
  const [cart] = value.cart;

  const toggleMenu = () => {
    setMenu(!menu);
  };
  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <header>
      <div className="logo">
        <h1>
          <Link to="/products">Online Shop</Link>
        </h1>
      </div>
      <ul style={styleMenu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        {/* <li>
          <Link to="/products/:id" exact>
            Details
          </Link>
        </li> */}
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/login">Login/Logout</Link>
        </li>
        <li>
          <i className="fas fa-times"></i>
        </li>
        <li onClick={toggleMenu}></li>
      </ul>
      <div className="menu" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      <div className="cart-icon">
        <span> {cart.length}</span>
        <Link to="/cart">
          <img src={CartSvg} width="30" />
        </Link>
      </div>
    </header>
  );
}
