import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Gradient from "./Gradient";

function AppLayout() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <Gradient>
        <Outlet />
      </Gradient>
    </div>
  );
}

export default AppLayout;
