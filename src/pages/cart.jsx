import React from "react";
import "../App.css";
import CartItem from "../components/cartItem";
import { useContext } from 'react'
import { mainContext } from "../context";

const Cart = () => {
  const { bir, biriDeyisen } = useContext(mainContext);
  return (
    <div className="cart-container">
      <div className="cart">
        <p>Cart</p>
        <p>{bir}</p>
        <div className="cart-items">
          <CartItem/>
        </div>
      </div>
    </div>
  );
};

export default Cart;
