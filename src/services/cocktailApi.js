export const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/";
import transformDrink from "../utils/transformDrink";
import fetchData from "./fetchData";

export async function getRandomCocktail() {
  const data = await fetchData(`${BASE_URL}random.php`);
  const modifiedData = transformDrink(data.drinks[0]);
  return modifiedData;
}

export async function searchCocktailByName(name) {
  const data = await fetchData(`${BASE_URL}search.php?s=${name}`);
  const modifiedData = data.drinks.map((item) => transformDrink(item));
  return modifiedData;
}

export async function getCocktailById(id) {
  const data = await fetchData(`${BASE_URL}lookup.php?i=${id}`);
  const modifiedData = transformDrink(data.drinks[0]);
  return modifiedData;
}

export async function searchCocktailByIngredient(name) {
  const data = await fetchData(`${BASE_URL}filter.php?i=${name}`);
  return data.drinks.map((drink) => ({
    idDrink: drink.idDrink,
    title: drink.strDrink,
    thumb: drink.strDrinkThumb,
  }));
}

export async function searchByCategory(category) {
  const data = await fetchData(`${BASE_URL}filter.php?c=${category}`);
  return data.drinks.map((drink) => ({
    idDrink: drink.idDrink,
    title: drink.strDrink,
    thumb: drink.strDrinkThumb,
  }));
}

export async function getIngredientByName(name) {
  const data = await fetchData(`${BASE_URL}search.php?i=${name}`);
  const ingredient = data.ingredients[0];
  const modifiedData = {
    idIngredient: ingredient.idIngredient,
    description: ingredient.strDescription,
    name: ingredient.strIngredient,
  };
  return modifiedData;
}
