import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContext = createContext();

export function useCartContext() {
  return useContext(CartContext);
}

export function CartContextProvider({ children }) {
  const { getStorage, setStorage } = useLocalStorage();

  const [cart, setCart] = useState(() => {
    const storageData = getStorage("cart");
    return storageData ? storageData : [];
  });

  useEffect(() => {
    setStorage("cart", cart);
  }, [cart, setStorage]);

  const total = cart.reduce((acc, curr) => acc + curr.amount, 0);

  function addItem({ idDrink, thumb, title, ingredients }) {
    if (cart.find((item) => item.idDrink === idDrink)) {
      increaseItemAmount(idDrink);
    } else {
      setCart((prev) => [
        ...prev,
        {
          idDrink,
          thumb,
          title,
          ingredients,
          amount: 1,
        },
      ]);
    }
  }

  function removeItem(idDrink) {
    setCart((prev) => prev.filter((drink) => drink.idDrink !== idDrink));
  }

  function increaseItemAmount(idDrink) {
    setCart((prev) =>
      prev.map((drink) =>
        drink.idDrink === idDrink
          ? {
              ...drink,
              amount: drink.amount + 1,
            }
          : drink
      )
    );
  }

  function decreaseItemAmount(idDrink) {
    const drink = cart.find((drink) => drink.idDrink === idDrink);
    if (drink.amount === 1) {
      removeItem(idDrink);
      return;
    }
    setCart((prev) =>
      prev.map((drink) =>
        drink.idDrink === idDrink
          ? {
              ...drink,
              amount: drink.amount - 1,
            }
          : drink
      )
    );
  }

  function setItemAmount(idDrink, amount) {
    if (amount === "0") removeItem(idDrink);
    setCart((prev) =>
      prev.map((drink) =>
        drink.idDrink === idDrink
          ? {
              ...drink,
              amount,
            }
          : drink
      )
    );
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        addItem,
        increaseItemAmount,
        decreaseItemAmount,
        setItemAmount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
