import React from "react";
import { useSettings } from "../context/SettingsContext";
import { getThemeColors } from "../styles/colors";
import { SidebarConfig } from "../settings/SidebarConfig";

function Board({ isSidebarOpen }) {
  const { settings } = useSettings();
  const colors = getThemeColors(settings.theme);

  // Calcular largura disponível para o board
  const sidebarWidth = isSidebarOpen
    ? SidebarConfig.SIDEBAR_WIDTH_EXPANDED
    : SidebarConfig.SIDEBAR_WIDTH_COLLAPSED;

  return (
    <div
      className="w-full min-h-screen p-6"
      style={{
        backgroundColor: colors.background.container,
        color: colors.text.primary,
      }}
    >
      <div
        className="max-w-full"
        style={{
          width: `calc(100vw - ${sidebarWidth}px)`,
        }}
      >
        <div className="mt-4">
          {/* Área para colunas dos cards */}
          <div className="flex space-x-4 overflow-x-auto">
            <div
              className="w-64 p-4 rounded-md flex-shrink-0"
              style={{ backgroundColor: colors.background.main }}
            >
              Coluna 1
            </div>
            <div
              className="w-64 p-4 rounded-md flex-shrink-0"
              style={{ backgroundColor: colors.background.main }}
            >
              Coluna 2
            </div>
            {/* Mais colunas */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
