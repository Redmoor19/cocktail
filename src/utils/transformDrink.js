export default function transformDrink(drink) {
  return {
    idDrink: drink.idDrink,
    category: drink.strCategory,
    drinkName: drink.strDrink,
    thumb: drink.strDrinkThumb,
    glass: drink.strGlass,
    instruction: drink.strInstructions,
    ingredient: transformIngedients(drink),
  };
}

export function transformIngedients(drink) {
  const ingredients = [];

  for (let i = 1; i < 15; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;

    const ingredient = drink[ingredientKey];
    const measure = drink[measureKey];

    if (ingredient) {
      ingredients.push({ ingredient, measure });
    } else {
      break;
    }
  }

  return ingredients;
}
