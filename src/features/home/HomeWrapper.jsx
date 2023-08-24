import FactJoke from "./FactJoke";
import RandomCocktail from "./RandomCocktail";

function HomeWrapper() {
  return (
    <div className="flex flex-col items-center">
      <RandomCocktail />
      <FactJoke />
    </div>
  );
}

export default HomeWrapper;
