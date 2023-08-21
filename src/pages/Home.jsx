import { getRandomCocktail } from "../services/cocktailApi";
import { useQuery } from "@tanstack/react-query";

function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["randonCocktail"],
    queryFn: getRandomCocktail,
  });
  console.log(data);
  console.log(isLoading);
  return <div>Home</div>;
}

export default Home;
