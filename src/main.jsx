import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SettingsProvider } from "./context/SettingsContext";
import Sidebar from "./components/Sidebar";
import Settings from "./pages/Settings";
import Board from "./components/Board";
import BoardSettings from "./pages/BoardSettings";
import "./styles.css";
import { getThemeColors } from "./styles/colors";
import { useSettings } from "./context/SettingsContext";
import { SidebarConfig } from "./settings/SidebarConfig";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const { settings } = useSettings();
  const colors = getThemeColors(settings.theme);

  return (
    <Router>
      <div
        className="flex w-full min-h-screen"
        style={{ backgroundColor: colors.background.main }}
      >
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <div
          className="flex-1 min-w-0 transition-all duration-300"
          style={{
            marginLeft: `${
              isSidebarOpen
                ? SidebarConfig.SIDEBAR_WIDTH_EXPANDED
                : SidebarConfig.SIDEBAR_WIDTH_COLLAPSED
            }px`,
          }}
        >
          <Routes>
            <Route path="/" element={<Board isSidebarOpen={isSidebarOpen} />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/board-settings" element={<BoardSettings />} />
            <Route
              path="*"
              element={
                <div className="p-6" style={{ color: colors.text.primary }}>
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
