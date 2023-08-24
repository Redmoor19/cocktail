export default function transformDrink(drink) {
  return {
    type: "drink",
    idDrink: drink.idDrink,
    category: drink.strCategory,
    title: drink.strDrink,
    thumb: drink.strDrinkThumb,
    glass: drink.strGlass,
    instruction: drink.strInstructions,
    ingredients: transformIngedients(drink),
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
      ingredients.push({ ingredient, ...translatedMeasure });
    } else {
      break;
    }
  }

  return ingredients;
}

function translateMeasure(measureStr) {
  let measureArr = measureStr.trim().split(" ");

  function arrToNum(arr) {
    let measure = 1,
      unit = "",
      containsNum = false;
    for (const item of arr) {
      if (!isNaN(item)) {
        measure = measure * parseFloat(item);
        containsNum = true;
      } else if (item.includes("/")) {
        const [num, denum] = item.split("/");
        measure = (measure * parseFloat(num)) / parseFloat(denum);
        containsNum = true;
      } else if (item.includes("-")) {
        const [first, second] = item.split("-");
        measure = measure * (parseFloat(second) - parseFloat(first));
        containsNum = true;
      } else {
        unit += ` ${item}`;
      }
    }
    if (!containsNum) measure = null;
    return [measure, unit];
  }

  const [measure, unit] = arrToNum(measureArr);
  let amount, measureUnit;

  if (measureArr.find((item) => item === "oz")) {
    amount = measure * 30;
    measureUnit = "ml";
  } else if (measureArr.find((item) => (item === "qt") | (item === "quart"))) {
    amount = measure * 950;
    measureUnit = "ml";
  } else if (measureArr.find((item) => item === "pint")) {
    amount = measure * 550;
    measureUnit = "ml";
  } else if (measureArr.find((item) => item === "gal")) {
    amount = measure * 4.5;
    measureUnit = "L";
  } else {
    amount = measure;
    measureUnit = unit;
  }

  if (amount && amount % 1 !== 0) {
    amount = amount.toFixed(1);
  }

  return { amount, unit: measureUnit };
}
