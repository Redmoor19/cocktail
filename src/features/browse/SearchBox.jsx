import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import GridDrinks from "../../UI/GridDrinks";
import Spinner from "../../UI/Spinner";
import DrinkItem from "../../UI/DrinkItem";

function SearchBox({ identificator, fetchFunc }) {
  const [searchParams] = useSearchParams();

  const parameter = searchParams.get(identificator);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["search", parameter],
    queryFn: () => fetchFunc(parameter),
    enabled: !!parameter,
  });

  if (parameter === null) return null;
  if (isLoading === true) return <Spinner />;
  if (isError)
    return (
      <h2 className="text-stone-100 text-center mt-24">
        Sorry, nothing was found. Try something else.
      </h2>
    );

  return (
    <GridDrinks>
      {data.map((drink) => (
        <DrinkItem key={drink.idDrink} {...drink} />
      ))}
    </GridDrinks>
  );
}

export default SearchBox;
