"use client";
import { page1 } from "@/components/Data";
import React, { createContext, useState } from "react";
export const ShopContext = createContext(
{
  cartItem: {},
  addToCart: () => {},
  updateCartItemCount: () => {},
  removeAllFromCart: () => {},
  removeFromCart: () => {},
  getTotalCartAmount: () => 0,
  checkout: () => {},
});
const defaultCart = () => {
  let cart = {};
  for (let i = 1; i <=page1.length + 1; i++) {
    cart[i] = 0;
 }
  return cart;
};

export const ShopContextProvider = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState(defaultCart());
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = page1.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
    }
    return totalAmount;
  };
  
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] <= 0) {
        return { ...prev, [itemId]: 0 };
      }
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => {
      if (newAmount <= 0) {
        return { ...prev, [itemId]: 0 };
      }
      return { ...prev, [itemId]: newAmount };
    });
  };
  const removeAllFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  };

  const checkout = () => {
    setCartItems(defaultCart());
  };
  const contextValue = { 
    cartItems,
    addToCart,
    updateCartItemCount,
    removeAllFromCart,
    removeFromCart,
    getTotalCartAmount,
    checkout,};
  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};
