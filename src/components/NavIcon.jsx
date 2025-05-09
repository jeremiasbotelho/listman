import { NavLink } from "react-router-dom";

function NavIcon({ to, path, label, isOpen, textColor }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center p-2 rounded-md transition-colors duration-200 ${
          isActive
            ? "bg-gray-200 text-blue-600"
            : `${textColor} hover:bg-gray-200 hover:text-blue-600`
        }`
      }
    >
      <svg
        className="w-6 h-6 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={path}
        />
      </svg>
      <span className={`ml-3 ${isOpen ? "block" : "hidden"}`}>{label}</span>
    </NavLink>
  );
}

export default NavIcon;
