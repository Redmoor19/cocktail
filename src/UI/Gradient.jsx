function Gradient({ children }) {
  return (
    <div className="h-screen bg-gradient-to-b from-stone-800 to-stone-500">
      {children}
    </div>
  );
}

export default Gradient;
