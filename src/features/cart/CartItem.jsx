import { useCartContext } from "../../context/cartContext";

function CartItem({ title, ingredients, amount, idDrink }) {
  const { increaseItemAmount, decreaseItemAmount, setItemAmount } =
    useCartContext();

  function changeHandler(e) {
    if (e.target.value < 1000) setItemAmount(idDrink, e.target.value);
  }

  return (
    <div className="mb-4">
      <div className="flex justify-between">
        <h3 className="font-semibold text-xl text-stone-700">
          {title}{" "}
          <span className="italic font-light text-stone-600">x{amount}</span>
        </h3>
        <div className="flex items-center gap-3">
          <button
            onClick={() => decreaseItemAmount(idDrink)}
            className="bg-stone-700 w-7 h-7 rounded-full text-stone-200 font-semibold"
          >
            -
          </button>
          <input
            className="w-20 h-7 rounded-md px-3 ring-2 ring-stone-700 focus:outline-none focus:ring-stone-500"
            type="number"
            placeholder={amount}
            value={amount}
            onChange={changeHandler}
          />
          <button
            onClick={() => increaseItemAmount(idDrink)}
            className="bg-stone-700 w-7 h-7 rounded-full text-stone-200 font-semibold"
          >
            +
          </button>
        </div>
      </div>
      <div className="h-[1px] my-2 w-full bg-stone-500"></div>
      <ul className="list-disc">
        {ingredients.map((item) => (
          <li className="ml-10 py-1" key={item.ingredient}>
            {item.ingredient}{" "}
            <span className="font-semibold text-stone-700">
              {item.amount && item.amount % 1 !== 0
                ? (item.amount * amount).toFixed(1)
                : item.amount * amount}
              {item.unit}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartItem;
