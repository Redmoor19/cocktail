import { useState } from "react";
import { BASE_URL } from "../services/cocktailApi";
import { createSearchParams, useNavigate } from "react-router-dom";

function SearchInput() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  function submitHandler(e) {
    if (e.key !== "Enter") return;

    fetch(`${BASE_URL}filter.php?i=${searchQuery}`, { method: "HEAD" })
      .then((response) => {
        if (response.ok) {
          const contentLength = response.headers.get("content-length");
          if (contentLength === "0") {
            navigate({
              pathname: "/browse",
              search: createSearchParams({
                ingredient: searchQuery,
              }).toString(),
            });
          } else {
            navigate({
              pathname: "/browse",
              search: createSearchParams({
                name: searchQuery,
              }).toString(),
            });
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setSearchQuery("");
  }

  return (
    <input
      className="bg-stone-700 h-10 w-64 xl:w-80 rounded-3xl pl-4 placeholder:text-stone-200 text-stone-200 hover:ring-2 hover:ring-stone-900 active:ring-2 active:ring-stone-900"
      type="text"
      placeholder="Let's roll..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyDown={submitHandler}
    />
  );
}

export default SearchInput;
