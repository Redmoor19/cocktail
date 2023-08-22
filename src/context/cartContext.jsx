import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCartContext() {
  return useContext(CartContext);
}

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
}
