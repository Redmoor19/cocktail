import fetchData from "./fetchData";
const BASE_URL = "https://api.api-ninjas.com/v1/";
const API = import.meta.env.VITE_NINJA_KEY;

export async function getJoke() {
  const data = await fetchData(`${BASE_URL}dadjokes?limit=1`, "GET", {
    "X-Api-Key": API,
  });
  return data[0];
}

export async function getFact() {
  const data = await fetchData(`${BASE_URL}facts?limit=1`, "GET", {
    "X-Api-Key": API,
  });
  return data[0];
}
