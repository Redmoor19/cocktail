import categories from "../../utils/drinkCategories";
import GridDrinks from "../../UI/GridDrinks";
import DrinkItem from "../../UI/DrinkItem";

function CategoriesWrapper() {
  return (
    <GridDrinks>
      {categories.map((category) => (
        <DrinkItem key={category.title} {...category} />
      ))}
    </GridDrinks>
  );
}

export default CategoriesWrapper;
