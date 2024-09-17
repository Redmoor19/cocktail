function Gradient({ children }) {
  return (
    <div className="h-[calc(100vh-96px)] bg-gradient-to-b from-stone-800 to-stone-500 overflow-y-scroll no-scrollbar relative">
      {children}
    </div>
  );
}

export default Gradient;
