import React, { createContext, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(0);

  const addItemToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <CarritoContext.Provider value={{ cartItems, addItemToCart }}>
      {children}
    </CarritoContext.Provider>
  );
};
