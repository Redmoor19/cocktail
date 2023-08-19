async function fetchData(url, headers) {
  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error("Can't get the data");
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export default fetchData;
