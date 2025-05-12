import React from "react";
import { useSettings } from "../context/SettingsContext";
import { getThemeColors } from "../styles/colors";

function Board({ isSidebarOpen }) {
  const context = useSettings();
  if (!context) {
    console.error("SettingsContext not found in Board");
    return <div>Erro: Contexto de configurações não encontrado.</div>;
  }
  const { settings } = context;
  const colors = getThemeColors(settings.theme);

  // Log para depuração
  console.log("Board rendered, isSidebarOpen:", isSidebarOpen);

  return (
    <div
      className="w-screen md:w-full min-h-screen p-2 overflow-x-auto"
      style={{
        backgroundColor: colors.background.container,
        color: colors.text.primary,
      }}
    >
      <div className="w-full">
        <div className="">
          {/* Área para colunas dos cards */}
          <div className="flex space-x-4">
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
