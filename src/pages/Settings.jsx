import { useState } from "react";
import { useSettings } from "../context/SettingsContext";
import { getThemeColors } from "../styles/colors";

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
  const colors = getThemeColors(settings.theme);

  const handleToggleChecklistItems = (e) => {
    const checked = e.target.checked;
    console.log("Toggle changed:", checked);
    updateSettings({ showChecklistItems: checked });
  };

  const handleThemeChange = (e) => {
    const checked = e.target.checked;
    console.log("Theme changed:", checked ? "dark" : "light");
    updateSettings({ theme: checked ? "dark" : "light" });
  };

  return (
    <div
      className="w-full min-h-screen p-6 font-sans"
      style={{ backgroundColor: colors.background.main }}
    >
      <div
        className="w-full p-6 rounded-md shadow-sm"
        style={{ backgroundColor: colors.background.container }}
      >
        <h1
          className="text-lg font-semibold mb-6"
          style={{ color: colors.text.primary }}
        >
          Configurações
        </h1>
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex justify-center space-x-8">
            {["layout", "profile"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                style={{
                  borderColor:
                    activeTab === tab ? colors.tab.border : "transparent",
                  color:
                    activeTab === tab ? colors.tab.active : colors.tab.inactive,
                }}
              >
                {tab === "layout" ? "Layout" : "Perfil"}
              </button>
            ))}
          </nav>
        </div>
        {activeTab === "layout" && (
          <div>
            {/* Mostrar itens da checklist */}
            <div
              className="p-4 rounded-md shadow-sm mb-4 hover:shadow-md transition duration-200"
              style={{ backgroundColor: colors.background.container }}
            >
              <div className="flex items-center">
                <label
                  htmlFor="showChecklistItems"
                  className="text-sm font-medium flex-1 cursor-pointer"
                  style={{ color: colors.text.primary }}
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
                    className="block w-10 h-6 rounded-full transition duration-200 ease-in-out"
                    style={{
                      backgroundColor: settings.showChecklistItems
                        ? colors.toggle.active
                        : colors.toggle.inactive,
                    }}
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
            {/* Tema Claro/Escuro */}
            <div
              className="p-4 rounded-md shadow-sm mb-4 hover:shadow-md transition duration-200"
              style={{ backgroundColor: colors.background.container }}
            >
              <div className="flex items-center">
                <label
                  htmlFor="theme"
                  className="text-sm font-medium flex-1 cursor-pointer"
                  style={{ color: colors.text.primary }}
                >
                  Tema Escuro
                </label>
                <div className="relative inline-block w-10 h-6 mr-2">
                  <input
                    type="checkbox"
                    id="theme"
                    checked={settings.theme === "dark"}
                    onChange={handleThemeChange}
                    className="absolute opacity-0 w-full h-full cursor-pointer z-10"
                  />
                  <span
                    className="block w-10 h-6 rounded-full transition duration-200 ease-in-out"
                    style={{
                      backgroundColor:
                        settings.theme === "dark"
                          ? colors.toggle.active
                          : colors.toggle.inactive,
                    }}
                  >
                    <span
                      className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition duration-200 ease-in-out ${
                        settings.theme === "dark" ? "translate-x-4" : ""
                      }`}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "profile" && (
          <div
            className="p-4 rounded-md shadow-sm hover:shadow-md transition duration-200"
            style={{ backgroundColor: colors.background.container }}
          >
            <h2
              className="text-base font-medium mb-4 text-center"
              style={{ color: colors.text.primary }}
            >
              Configurações do Perfil
            </h2>
            <p
              className="text-center text-sm"
              style={{ color: colors.text.secondary }}
            >
              Placeholder para configurações do perfil.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Settings;
