import NoSearch from "../features/browse/NoSearch";
import SearchBox from "../features/browse/SearchBox";
import {
  searchByCategory,
  searchCocktailByIngredient,
  searchCocktailByName,
} from "../services/cocktailApi";
import Container from "../UI/Container";

function Browse() {
  return (
    <Container>
      <SearchBox identificator={"category"} fetchFunc={searchByCategory} />
      <SearchBox
        identificator={"ingredient"}
        fetchFunc={searchCocktailByIngredient}
      />
      <SearchBox identificator={"name"} fetchFunc={searchCocktailByName} />
      <NoSearch />
    </Container>
  );
}

export default Browse;
