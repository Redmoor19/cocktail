import { useNavigate, createSearchParams } from "react-router-dom";

function DrinkItem({ thumb, title, type, idDrink }) {
  const navigate = useNavigate();

  function clickHandler() {
    if (type === "category") {
      navigate({
        pathname: "/browse",
        search: createSearchParams({
          category: title,
        }).toString(),
      });
    } else {
      navigate(`/browse/drink/${idDrink}`);
    }
  }

  return (
    <div
      className="h-auto aspect-square rounded-lg flex flex-col justify-end overflow-hidden cursor-pointer shadow-md shadow-stone-700 hover:scale-105 duration-300"
      style={{ backgroundImage: `url(${thumb})`, backgroundSize: "cover" }}
      onClick={clickHandler}
    >
      <div className="h-20 bg-gradient-to-t from-white to-[#ffffff00] flex flex-col justify-end">
        <h3 className="text-center mb-2 capitalize font-semibold ">{title}</h3>
      </div>
    </div>
  );
}

export default DrinkItem;
