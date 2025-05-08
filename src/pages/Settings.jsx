import { useState } from "react";
import { useSettings } from "../context/SettingsContext";

function Settings() {
  const [activeTab, setActiveTab] = useState("layout");
  const context = useSettings();
  if (!context) {
    console.error(
      "SettingsContext not found. Ensure SettingsProvider is wrapping the app."
    );
    return <div>Erro: Contexto de configurações não encontrado.</div>;
  }
  const { settings, updateSettings } = context;

  const handleToggleChecklistItems = (e) => {
    const checked = e.target.checked;
    console.log("Toggle changed:", checked);
    updateSettings({ showChecklistItems: checked });
  };

  const handleSidebarColorChange = (e) => {
    updateSettings({ sidebarColor: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans flex items-center justify-center">
      <div className="max-w-lg w-full bg-white p-6 rounded-md shadow-sm">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Configurações
        </h1>
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex justify-center space-x-8">
            {["layout", "profile", "colors"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-blue-600 hover:border-gray-300"
                }`}
              >
                {tab === "layout"
                  ? "Layout"
                  : tab === "profile"
                  ? "Perfil"
                  : "Cores"}
              </button>
            ))}
          </nav>
        </div>
        {activeTab === "layout" && (
          <div>
            <div className="p-4 rounded-md shadow-sm mb-4 hover:shadow-md hover:bg-gray-50 transition duration-200 bg-white">
              <div className="flex items-center">
                <label
                  htmlFor="showChecklistItems"
                  className="text-lg font-medium flex-1 cursor-pointer text-gray-700"
                >
                  Mostrar itens da checklist no quadro
                </label>
                <div className="relative inline-block w-10 h-6 mr-2">
                  <input
                    type="checkbox"
                    id="showChecklistItems"
                    checked={settings.showChecklistItems}
                    onChange={handleToggleChecklistItems}
                    className="absolute opacity-0 w-full h-full cursor-pointer z-10"
                  />
                  <span
                    className={`block w-10 h-6 rounded-full transition duration-200 ease-in-out ${
                      settings.showChecklistItems
                        ? "bg-blue-500"
                        : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition duration-200 ease-in-out ${
                        settings.showChecklistItems ? "translate-x-4" : ""
                      }`}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "profile" && (
          <div className="p-4 rounded-md shadow-sm hover:shadow-md hover:bg-gray-50 transition duration-200 bg-white">
            <h2 className="text-lg font-medium mb-4 text-center text-gray-700">
              Configurações do Perfil
            </h2>
            <p className="text-center text-gray-500">
              Placeholder para configurações do perfil.
            </p>
          </div>
        )}
        {activeTab === "colors" && (
          <div>
            <div className="p-4 rounded-md shadow-sm mb-4 hover:shadow-md hover:bg-gray-50 transition duration-200 bg-white">
              <h3 className="text-lg font-medium mb-2 text-gray-700">
                Cor da Barra Lateral
              </h3>
              <div className="flex items-center">
                <label className="flex-1 text-sm text-gray-500">
                  Selecione a cor
                </label>
                <input
                  type="color"
                  value={settings.sidebarColor}
                  onChange={handleSidebarColorChange}
                  className="w-10 h-10 rounded-md cursor-pointer"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Settings;
