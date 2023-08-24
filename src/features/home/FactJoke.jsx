import { useQueries } from "@tanstack/react-query";
import { getFact, getJoke } from "../../services/ninjaApi";
import Spinner from "../../UI/Spinner";

function FactJoke() {
  const [
    { data: joke, isLoading: jokeIsLoading },
    { data: fact, isLoading: factIsLoading },
  ] = useQueries({
    queries: [
      { queryKey: ["joke"], queryFn: getJoke },
      { queryKey: ["fact"], queryFn: getFact },
    ],
  });

  if (jokeIsLoading || factIsLoading) return <Spinner />;

  return (
    <div className="text-center mt-8 max-w-2xl text-stone-300 text-lg flex flex-col gap-3">
      <h2 className="text-2xl">This can cheer you up!</h2>
      <p>Joke: {joke.joke}</p>
      <p>Fact: {fact.fact}</p>
    </div>
  );
}

export default FactJoke;
