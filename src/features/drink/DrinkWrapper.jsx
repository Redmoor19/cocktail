import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { getCocktailById } from "../../services/cocktailApi";

import Spinner from "../../UI/Spinner";
import IngridientItem from "./IngridientItem";
import GoBack from "../../UI/GoBack";
import Button from "../../UI/Button";
import { useCartContext } from "../../context/cartContext";

function DrinkWrapper() {
  const { id } = useParams();
  const { addItem } = useCartContext();

  const { data, isLoading } = useQuery({
    queryKey: ["drink", `${id}`],
    queryFn: () => getCocktailById(id),
  });

  function addHandler() {
    addItem(data);
  }

  if (isLoading) return <Spinner />;

  return (
    <div className="bg-stone-300 pt-9 pb-24 px-3 md:px-10 rounded-2xl flex relative flex-col md:flex-row">
      <div className="flex-1 flex md:flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-5">
          <img
            src={data.thumb}
            alt={data.title}
            className="rounded-2xl shadow-lg shadow-stone-400"
          />
          <h2 className="uppercase text-lg tracking-tight text-stone-700">
            {data.title}
          </h2>
        </div>
        <p className="bg-stone-200 py-3 px-6 text-base text-stone-600 rounded-2xl shadow-inner first-letter:capitalize self-start md:self-auto">
          {data.instruction
            ? data.instruction
            : "No instruction for this drink"}
        </p>
      </div>
      <div className="flex-1 md:flex-[2] grid grid-cols-3 md:grid-cols-4 px-5 gap-y-3 mt-8 md:mt-0">
        {data.ingredients.map((item) => (
          <IngridientItem key={item.ingredient} {...item} />
        ))}
      </div>
      <div className="absolute bottom-8 right-3 md:right-10 flex gap-5">
        <GoBack type="secondary">Go back</GoBack>
        <Button onClick={addHandler}>Add to list</Button>
      </div>
    </div>
  );
}

export default DrinkWrapper;
