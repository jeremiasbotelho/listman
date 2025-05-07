import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-x-auto p-4 md:p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
