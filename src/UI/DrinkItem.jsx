function DrinkItem({ image, title }) {
  return (
    <div
      className="h-48 rounded-lg flex flex-col justify-end overflow-hidden cursor-pointer shadow-md shadow-stone-900 hover:scale-110 transition-all"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
    >
      <div className="h-20 bg-gradient-to-t from-white to-[#ffffff00] flex flex-col justify-end">
        <h3 className="text-center mb-2 capitalize font-semibold ">{title}</h3>
      </div>
    </div>
  );
}

export default DrinkItem;
