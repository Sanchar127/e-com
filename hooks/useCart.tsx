"use client";
import { createContext, useContext, useState } from "react";

type CartContextType = {
  cartTotalQty: number;
};

export const CartContext = createContext<CartContextType | null>(null);
interface props {
  [propName: string]: any;
}
export const CartContextProvider = (props: props) => {
  const [cartTotalQty, setCartTotalQty] = useState(1);
  const value = {
    cartTotalQty,
  };
  return <CartContext.Provider value={value} {...props} />;
};
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
};
