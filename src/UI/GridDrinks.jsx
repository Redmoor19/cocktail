function GridDrinks({ children }) {
  return (
    <div className="grid grid-cols-2 px-2 md:px-0 md:grid-cols-4 grid-flow-row gap-3">
      {children}
    </div>
  );
}

export default GridDrinks;
