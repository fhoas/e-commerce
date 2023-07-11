import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import iconImage from "../assets/ICONN.svg";
import { ShoppingCart, User } from 'phosphor-react';

const Header = () => {
  return (
      <div className="header">
      <div className="favicon">
      <Link to="./"><img src={iconImage} alt="ICON" /></Link>
      </div>
      <div className="nav">
        <Link to="/">Shop</Link>
        <Link to="/">Most Wanted</Link>
        <Link to="/">New arrival</Link>
        <Link to="/">Brands</Link>
      </div>
      <div className="header-icons">
        <Link to="/cart"><ShoppingCart size={32} /></Link>
        <Link to="/cart"><User size={32} /></Link>
      </div>
    </div>
  );
};

export default Header;
