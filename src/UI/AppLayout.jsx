import { Outlet } from "react-router-dom";
import Gradient from "./Gradient";
import Header from "./Header";
import CartBar from "../features/cart/CartBar";

function AppLayout() {
  return (
    <div className="h-screen font-roboto">
      <Header />
      <Gradient>
        <div className="hidden md:block h-9 fixed w-full bg-gradient-to-b from-stone-800 to-[#ffffff00] z-30"></div>
        <Outlet />
        <CartBar />
      </Gradient>
    </div>
  );
}

export default AppLayout;
