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

    const translatedMeasure = measure ? translateMeasure(measure) : measure;

    if (ingredient) {
      ingredients.push({ ingredient, translatedMeasure });
    } else {
      break;
    }
  }

  return ingredients;
}

function translateMeasure(measureStr) {
  let measureArr = measureStr.trim().split(" ");
  let result;

  function arrToNum(arr) {
    let result = 1;
    for (const item of arr) {
      if (!isNaN(item)) {
        result *= parseFloat(item);
      } else if (item.includes("/")) {
        const [num, denum] = item.split("/");
        result = (result * parseFloat(num)) / parseFloat(denum);
      }
    }
    return result;
  }
  const measure = arrToNum(measureArr);

  if (measureArr.find((item) => item === "oz")) {
    result = measure * 30 + " ml";
  } else if (measureArr.find((item) => (item === "qt") | (item === "quart"))) {
    result = measure * 950 + " ml";
  } else if (measureArr.find((item) => item === "pint")) {
    result = measure * 550 + " ml";
  } else if (measureArr.find((item) => item === "gal")) {
    result = measure * 4.5 + " L";
  } else {
    result = measureStr.trim();
  }

  return result;
}
