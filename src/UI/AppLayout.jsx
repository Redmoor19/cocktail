import { Outlet } from "react-router-dom";
import Gradient from "./Gradient";
import Header from "./Header";
import CartBar from "../features/cart/CartBar";

function AppLayout() {
  return (
    <div className="flex flex-col max-h-screen font-roboto">
      <Header />
      <Gradient>
        <div className="hidden md:block h-9 fixed w-full bg-gradient-to-b from-stone-800 to-[#ffffff00]"></div>
        <main className="md:w-[600px] lg:w-[800px] 2xl:w-[1200px] mx-auto py-9 z-40">
          <Outlet />
        </main>
      </Gradient>
      <CartBar />
    </div>
  );
}

export default AppLayout;
