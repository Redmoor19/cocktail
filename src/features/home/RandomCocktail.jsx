import { useQuery } from "@tanstack/react-query";
import { getRandomCocktail } from "../../services/cocktailApi";

import Spinner from "../../UI/Spinner";
import DrinkItem from "../../UI/DrinkItem";

function RandomCocktail() {
  const { data, isLoading } = useQuery({
    queryKey: ["randomCocktail"],
    queryFn: getRandomCocktail,
  });

  if (isLoading) return <Spinner />;

  return (
    <div>
      <h1 className="text-center text-stone-300 text-4xl">
        Don&#39;t know what to drink? <br />{" "}
        <span className="text-3xl">Try this one!</span>
      </h1>
      <div className="mt-6">
        <DrinkItem {...data} type="drink" />
      </div>
    </div>
  );
}

export default RandomCocktail;
