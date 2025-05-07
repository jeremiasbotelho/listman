import { NavLink } from "react-router-dom";

function Tabs() {
  return (
    <div className="md:block hidden border-b border-gray-200 mb-6">
      <nav className="flex space-x-4">
        <NavLink
          to="/settings/profile"
          className={({ isActive }) =>
            `px-4 py-2 text-sm font-medium ${
              isActive
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`
          }
        >
          Perfil
        </NavLink>
        <NavLink
          to="/settings/board"
          className={({ isActive }) =>
            `px-4 py-2 text-sm font-medium ${
              isActive
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`
          }
        >
          Board
        </NavLink>
      </nav>
    </div>
  );
}

export default Tabs;
