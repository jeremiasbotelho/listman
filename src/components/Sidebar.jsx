import NavIcon from "./NavIcon";
import { useSettings } from "../context/SettingsContext";
import { getThemeColors } from "../styles/colors";
import { SidebarConfig } from "../settings/SidebarConfig";
import { TopbarConfig } from "../settings/TopbarConfig";

function Sidebar({ isOpen, setIsOpen, isMobile }) {
  const { settings } = useSettings();
  const colors = getThemeColors(settings.theme);

  return (
    <>
      {/* Barra lateral */}
      <div
        className={`h-full fixed top-0 left-0 z-50 flex flex-col shadow-sm transition-all duration-300`}
        style={{
          width: isMobile
            ? SidebarConfig.SIDEBAR_WIDTH_EXPANDED
            : isOpen
            ? SidebarConfig.SIDEBAR_WIDTH_EXPANDED
            : SidebarConfig.SIDEBAR_WIDTH_COLLAPSED,
          transform: isMobile
            ? isOpen
              ? "translateX(0)"
              : "translateX(-100%)"
            : "translateX(0)",
          backgroundColor: colors.sidebar.background,
          paddingTop: isMobile ? `${TopbarConfig.TOPBAR_HEIGHT}px` : "0px",
        }}
      >
        {/* Botão de expandir/recolher (Desktop Only) */}
        <div
          className={`flex justify-end w-full p-2 ${
            isMobile ? "hidden" : "block"
          }`}
        >
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: colors.text.primary }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        {/* Conteúdo */}
        <div className="flex-1 flex flex-col">
          <nav className="space-y-2 p-2">
            <NavIcon
              to="/"
              path="M9 17V7m0 10h6m-6 0H3m12-10v10m0-10H9m6 0h6"
              label="Quadro"
              isOpen={isOpen}
              colors={colors}
              setIsSidebarOpen={setIsOpen}
              isMobile={isMobile}
            />
            <NavIcon
              to="/settings"
              path="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              label="Configurações"
              isOpen={isOpen}
              colors={colors}
              setIsSidebarOpen={setIsOpen}
              isMobile={isMobile}
            />
          </nav>
          {/* Nome Listman na base */}
          <div className={`mt-auto p-4 ${isOpen ? "block" : "hidden"}`}>
            <h2
              className="text-base font-semibold"
              style={{ color: colors.text.primary }}
            >
              Listman
            </h2>
          </div>
        </div>
      </div>
      {/* Overlay para fechar no mobile */}
      <div
        className={`md:hidden fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        } z-40`}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
}

export default Sidebar;
