import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="md:flex gap-8 text-stone-400 hidden">
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
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          `${isActive ? "text-stone-900" : ""} text-lg`
        }
      >
        Cart
      </NavLink>
    </nav>
  );
}

export default NavBar;
