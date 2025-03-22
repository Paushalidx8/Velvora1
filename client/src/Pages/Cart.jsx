import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems } = useCart();

  if (!cartItems || cartItems.length === 0) {
    return <h2>Your cart is empty.</h2>; // Prevent blank page
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
