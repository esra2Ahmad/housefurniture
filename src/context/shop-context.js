"use client";
import { page1 } from "@/components/Data";
import React, { createContext, useState } from "react";
export const ShopContext = createContext(

{
  cartItems: {},
  addToCart: () => {},
  updateCartItemCount: () => {},
  removeAllFromCart: () => {},
  removeFromCart: () => {},
  getTotalCartAmount: () => 0,
  checkout: () => {},
});
const defaultCart = () => {
  let cart = {};
  for (let i = 1; i < page1.length + 1; i++) {
    cart[i] = 0;
 }
  return cart;
};
export const ShopContextProvider = ({
  children,
}) => {
  const [cartItem, setCartItem] = useState(defaultCart());
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = page1.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += cartItem[item] * itemInfo.price;
        }
      }
    }
    return totalAmount;
  };
  
  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItem((prev) => {
      if (prev[itemId] <= 0) {
        return { ...prev, [itemId]: 0 };
      }
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItem((prev) => {
      if (newAmount <= 0) {
        return { ...prev, [itemId]: 0 };
      }
      return { ...prev, [itemId]: newAmount };
    });
  };
  const removeAllFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: 0 }));
  };

  const checkout = () => {
    setCartItem(defaultCart());
  };
  const contextValue = { 
    cartItem,
    addToCart,
    updateCartItemCount,
    removeAllFromCart,
    removeFromCart,
    getTotalCartAmount,
    checkout,};
  console.log(cartItem);
  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};
