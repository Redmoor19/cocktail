import NoSearch from "../features/browse/NoSearch";
import SearchBox from "../features/browse/SearchBox";
import {
  searchByCategory,
  searchCocktailByIngredient,
  searchCocktailByName,
} from "../services/cocktailApi";

function Browse() {
  return (
    <div>
      <SearchBox identificator={"category"} fetchFunc={searchByCategory} />
      <SearchBox
        identificator={"ingredient"}
        fetchFunc={searchCocktailByIngredient}
      />
      <SearchBox identificator={"name"} fetchFunc={searchCocktailByName} />
      <NoSearch />
    </div>
  );
}

export default Browse;
