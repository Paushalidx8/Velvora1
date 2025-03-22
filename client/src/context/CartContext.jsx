import React, { createContext, useContext, useState } from "react";

// Create a context
const CartContext = createContext();

// Custom hook to use CartContext
export const useCart = () => useContext(CartContext);

// Cart Provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Stores products in cart

  // Function to add item to cart
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  // Function to check if item is in cart
  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};
