import { createSearchParams, useNavigate } from "react-router-dom";

function IngridientItem({ ingredient, amount, unit }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center text-stone-700">
      <img
        src={`http://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`}
        alt={ingredient}
        className="cursor-pointer"
        onClick={() => {
          navigate({
            pathname: "/browse/ingredient",
            search: createSearchParams({
              name: ingredient,
            }).toString(),
          });
        }}
      />
      <p className="mt-2">{ingredient}</p>
      <p className="italic font-light">
        {amount} {unit}
      </p>
    </div>
  );
}

export default IngridientItem;
