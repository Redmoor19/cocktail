import { createContext, useContext } from "react";

const cartContext = createContext();

export function useCartContext() {
  return useContext(cartContext);
}

export function CartContextProvider({ children }) {
  return <cartContext.Provider value={{}}>{children}</cartContext.Provider>;
}
