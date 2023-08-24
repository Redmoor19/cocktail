import { useState } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";

function NavModal() {
  const [visible, setVisible] = useState(false);
  function clickHandler() {
    setVisible(false);
  }
  return (
    <div className="md:hidden">
      <img
        className="w-10"
        alt="hamburger"
        src="/hamburger.png"
        onClick={() => setVisible(true)}
      />
      {visible &&
        createPortal(
          <div className="h-screen w-2/3 bg-stone-100 absolute top-0 left-0 flex flex-col pt-10 pl-5 text-3xl text-stone-600 gap-7">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `${isActive ? "text-stone-900" : ""}`
              }
              onClick={clickHandler}
            >
              Home
            </NavLink>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                `${isActive ? "text-stone-900" : ""}`
              }
              onClick={clickHandler}
            >
              Categories
            </NavLink>
            <NavLink
              to="/browse"
              className={({ isActive }) =>
                `${isActive ? "text-stone-900" : ""}`
              }
              onClick={clickHandler}
            >
              Browse
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `${isActive ? "text-stone-900" : ""}`
              }
              onClick={clickHandler}
            >
              Cart
            </NavLink>
          </div>,
          document.body
        )}
    </div>
  );
}

export default NavModal;
