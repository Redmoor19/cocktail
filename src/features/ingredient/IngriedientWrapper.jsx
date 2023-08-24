import { useQuery } from "@tanstack/react-query";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { getIngredientByName } from "../../services/cocktailApi";

import Spinner from "../../UI/Spinner";
import Button from "../../UI/Button";

function IngredientWrapper() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const ingredient = searchParams.get("name");

  const { data, isLoading } = useQuery({
    queryKey: [`${ingredient}`],
    queryFn: () => getIngredientByName(ingredient),
  });

  if (isLoading) return <Spinner />;

  return (
    <div className="bg-stone-300 py-9 px-3 md:px-10 rounded-2xl flex relative mx-4 md:mx-0">
      <div className="flex-1 flex flex-col items-center gap-2">
        <img
          src={`http://www.thecocktaildb.com/images/ingredients/${ingredient}.png`}
          alt={ingredient}
        />
        <h3 className="font-semibold text-stone-600">{ingredient}</h3>
      </div>
      <div className="flex-[2]">
        <p>
          {data?.description
            ? data.description.substring(0, 1200)
            : "No information about this drink"}
          <a
            href={`https://en.wikipedia.org/wiki/${ingredient}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-600 cursor-pointer hover:text-blue-400"
          >
            ...(read more)
          </a>
        </p>
        <div className="mt-9 block text-center">
          <Button
            type="secondary"
            onClick={() =>
              navigate({
                pathname: "/browse",
                search: createSearchParams({
                  ingredient,
                }).toString(),
              })
            }
          >
            Check drinks with this ingredient
          </Button>
        </div>
      </div>
    </div>
  );
}

export default IngredientWrapper;
