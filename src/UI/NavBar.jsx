import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="h-24 bg-white relative py-2 shrink-0">
      <img src="/logo.png" alt="Logo" className="h-20 w-auto absolute left-3" />
      <div className="md:w-[600px] lg:w-[800px] 2xl:w-[1274px] mx-auto h-full flex flex-row justify-between items-center">
        <div className="flex flex-col justify-between gap-3">
          <h1 className="text-2xl font-bold tracking-widest">COCKTAIL</h1>
          <nav className="flex gap-2">
            <NavLink
              to="/home"
              className={({ isActive }) => `${isActive ? "font-bold" : ""}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/categories"
              className={({ isActive }) => `${isActive ? "font-bold" : ""}`}
            >
              Categories
            </NavLink>
            <NavLink
              to="/browse"
              className={({ isActive }) => `${isActive ? "font-bold" : ""}`}
            >
              Browse
            </NavLink>
          </nav>
        </div>
        <input
          className="bg-stone-800 h-10 w-64 rounded-3xl pl-4 placeholder:text-stone-200 text-stone-200"
          type="text"
          placeholder="Let's roll..."
        />
      </div>
    </div>
  );
}

export default NavBar;
