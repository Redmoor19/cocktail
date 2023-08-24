function Button({ children, type = "primary", onClick, className }) {
  const primary =
    type === "primary" &&
    "bg-stone-500 text-stone-100 hover:bg-stone-100 hover:text-stone-600 ring-2 ring-stone-500 shadow-stone-600 shadow-md";

  const secondary =
    type === "secondary" &&
    "ring-2 ring-stone-500 text-stone-600 hover:bg-stone-600 hover:text-stone-300 hover:ring-stone-600 shadow-stone-600 shadow-md";
  return (
    <button
      className={`rounded-lg px-6 py-3 font-semibold ${primary} ${secondary} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
