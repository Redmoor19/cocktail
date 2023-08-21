import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { searchByCategory } from "../../services/cocktailApi";
import GridDrinks from "../../UI/GridDrinks";
import Spinner from "../../UI/Spinner";
import DrinkItem from "../../UI/DrinkItem";

function CategoriesSearch() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  const { data, isLoading } = useQuery({
    queryKey: [category],
    queryFn: () => searchByCategory(category),
    enabled: !!category,
  });
  if (category === null) return null;
  if (isLoading === true) return <Spinner />;

  return (
    <GridDrinks>
      {data.map((category) => (
        <DrinkItem key={category.idDrink} {...category} />
      ))}
    </GridDrinks>
  );
}

export default CategoriesSearch;
