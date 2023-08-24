import { useSearchParams } from "react-router-dom";

function NoSearch() {
  const [searchParams] = useSearchParams();

  if (searchParams.size === 0)
    return (
      <h2 className="text-stone-100 text-center mt-24">
        Use the input on top for search by drink name or ingredient 🥂
      </h2>
    );
}

export default NoSearch;
