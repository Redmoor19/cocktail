import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { getCocktailById } from "../../services/cocktailApi";

function DrinkWrapper() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["drink", `${id}`],
    queryFn: () => getCocktailById(id),
  });

  console.log(isLoading);
  console.log(data);
  return <div>Drink</div>;
}

export default DrinkWrapper;
