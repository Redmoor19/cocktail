import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex gap-8 text-stone-400">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `${isActive ? "text-stone-900" : ""} text-lg`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/categories"
        className={({ isActive }) =>
          `${isActive ? "text-stone-900" : ""} text-lg`
        }
      >
        Categories
      </NavLink>
      <NavLink
        to="/browse"
        className={({ isActive }) =>
          `${isActive ? "text-stone-900" : ""} text-lg`
        }
      >
        Browse
      </NavLink>
    </nav>
  );
}

export default NavBar;
