import DrinkItem from "../../UI/DrinkItem";
import GridDrinks from "../../UI/GridDrinks";

function CategoriesWrapper() {
  return (
    <GridDrinks>
      <DrinkItem image="/categories/Cocktail.png" title="cocktail" />
      <DrinkItem image="/categories/beer.png" title="beer" />
      <DrinkItem image="/categories/Cocoa.png" title="cocoa" />
      <DrinkItem image="/categories/Coffe_tea.png" title="coffe tea" />
      <DrinkItem
        image="/categories/Homemade_liquir.png"
        title="homemade liquir"
      />
      <DrinkItem
        image="/categories/Ordinary_drink.png"
        title="ordinary drink"
      />
      <DrinkItem image="/categories/Party_drink.png" title="party drink" />
      <DrinkItem image="/categories/Shake.png" title="shake" />
      <DrinkItem image="/categories/Shot1.jpg" title="shot" />
      <DrinkItem image="/categories/soft_drink.png" title="soft drink" />
    </GridDrinks>
  );
}

export default CategoriesWrapper;
