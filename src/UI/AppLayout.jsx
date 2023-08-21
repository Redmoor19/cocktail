import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Gradient from "./Gradient";

function AppLayout() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <Gradient>
        <main className="md:w-[600px] lg:w-[800px] 2xl:w-[1200px] mx-auto">
          <Outlet />
        </main>
      </Gradient>
    </div>
  );
}

export default AppLayout;
