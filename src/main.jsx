import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SettingsProvider } from "./context/SettingsContext";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Settings from "./pages/Settings";
import Board from "./components/Board";
import BoardSettings from "./pages/BoardSettings";
import "./styles.css";
import { getThemeColors } from "./styles/colors";
import { useSettings } from "./context/SettingsContext";
import { SidebarConfig } from "./settings/SidebarConfig";
import { TopbarConfig } from "./settings/TopbarConfig";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const { settings } = useSettings();
  const colors = getThemeColors(settings.theme);

  // Atualizar isDesktop com base no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Log para depuração
  console.log("isSidebarOpen:", isSidebarOpen);
  console.log("isDesktop:", isDesktop);
  console.log(
    "MarginLeft:",
    isDesktop
      ? isSidebarOpen
        ? SidebarConfig.SIDEBAR_WIDTH_EXPANDED
        : SidebarConfig.SIDEBAR_WIDTH_COLLAPSED
      : 0
  );

  return (
    <Router>
      <div
        className="block w-full min-h-screen overflow-x-hidden"
        style={{ backgroundColor: colors.background.main }}
      >
        {/* Sidebar: escondida em mobile, empurra conteúdo em desktop */}
        <div
          className={`fixed top-0 left-0 h-full transition-all duration-300 z-40 md:static ${
            isSidebarOpen ? "w-64" : "w-0 hidden md:block md:w-16"
          }`}
          style={{
            backgroundColor: colors.sidebar.background,
          }}
        >
          <Sidebar
            isOpen={isSidebarOpen}
            setIsOpen={setIsSidebarOpen}
            isMobile={!isDesktop}
          />
        </div>

        {/* Topbar: visível apenas em mobile */}
        <Topbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          colors={colors}
        />

        {/* Conteúdo principal */}
        <div
          className="flex-1 min-w-0 transition-all duration-300"
          style={{
            marginLeft: isDesktop
              ? `${
                  isSidebarOpen
                    ? SidebarConfig.SIDEBAR_WIDTH_EXPANDED
                    : SidebarConfig.SIDEBAR_WIDTH_COLLAPSED
                }px`
              : "0px",
            marginTop: isDesktop ? "0px" : `${TopbarConfig.TOPBAR_HEIGHT}px`,
          }}
        >
          <Routes>
            <Route path="/" element={<Board isSidebarOpen={isSidebarOpen} />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/board-settings" element={<BoardSettings />} />
            <Route
              path="*"
              element={
                <div className="p-2" style={{ color: colors.text.primary }}>
                  Página não encontrada
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <SettingsProvider>
    <App />
  </SettingsProvider>
);
