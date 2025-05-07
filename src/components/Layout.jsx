import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Topbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div
        className={`flex-1 overflow-x-auto p-4 md:p-6 pt-16 md:pt-4 ${
          isSidebarOpen ? "md:ml-64" : "md:ml-12"
        } transition-all duration-300`}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
