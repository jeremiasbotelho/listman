import { NavLink } from "react-router-dom";

function NavIcon({
  to,
  path,
  label,
  isOpen,
  colors,
  setIsSidebarOpen,
  isMobile,
}) {
  return (
    <NavLink
      to={to}
      className="flex items-center p-2 rounded-md"
      style={({ isActive }) => {
        console.log(`NavIcon ${to}: isActive =`, isActive);
        return {
          backgroundColor: isActive
            ? colors.navIcon.hoverBackground
            : "transparent",
          color: isActive
            ? colors.navIcon.activeColor
            : colors.navIcon.inactiveColor,
        };
      }}
      onClick={() => isMobile && setIsSidebarOpen(false)}
      onMouseEnter={(e) => {
        console.log("Hover color:", colors.navIcon.hoverColor);
        e.currentTarget.style.color = colors.navIcon.hoverColor;
      }}
      onMouseLeave={(e) => {
        const isActive = e.currentTarget.classList.contains("active");
        e.currentTarget.style.color = isActive
          ? colors.navIcon.activeColor
          : colors.navIcon.inactiveColor;
      }}
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
