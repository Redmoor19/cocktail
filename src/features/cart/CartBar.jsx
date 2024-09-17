import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

function CartBar() {
  const { cart, total } = useCartContext();
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/cart");
  }

  if (cart.length > 0)
    return (
      <footer className="bg-stone-900 py-4 fixed bottom-0 w-full">
        <div className="w-full px-3 md:px-0 md:w-[600px] lg:w-[800px] 2xl:w-[1200px] mx-auto flex justify-between items-center">
          <div>
            <h4 className="text-stone-300">
              You have {cart.length} different drink{cart.length > 1 ? "s" : ""}{" "}
              in the cart.
            </h4>
            <h3 className="text-stone-400">Total amount of drinks: {total}</h3>
          </div>
          <h2
            className="text-stone-200 text-lg cursor-pointer hover:underline underline-offset-2"
            onClick={clickHandler}
          >
            See cart &rarr;
          </h2>
        </div>
      </footer>
    );
}

export default CartBar;
