import { useCartContext } from "../../context/cartContext";
import CartIngredientList from "./CartIngredientList";
import CartItem from "./CartItem";
import Button from "../../UI/Button";

function CartWrapper() {
  const { cart, total, clearCart } = useCartContext();

  if (total === 0)
    return (
      <h2 className="text-stone-100 text-center mt-24">
        Your cart is currently empty. Add more drinks.
      </h2>
    );

  return (
    <div className="bg-stone-300 py-9 px-10 rounded-2xl flex flex-col">
      {cart.map((item) => {
        return <CartItem key={item.idDrink} {...item} />;
      })}
      <CartIngredientList cart={cart} />
      <Button onClick={clearCart} className="w-40 mt-8 self-end">
        Clear cart
      </Button>
    </div>
  );
}

export default CartWrapper;
