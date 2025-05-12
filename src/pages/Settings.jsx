import { useState } from "react";
import { useSettings } from "../context/SettingsContext";
import { getThemeColors } from "../styles/colors";
import ToggleSwitch from "../components/ToggleSwitch";

function Settings() {
  const [activeTab, setActiveTab] = useState("layout");
  const [isHoverProfile, setIsHoverProfile] = useState(false);

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
    console.log("Toggle changed (checklist):", checked);
    updateSettings({ showChecklistItems: checked });
  };

  const handleThemeChange = (e) => {
    const checked = e.target.checked;
    console.log("Theme changed:", checked ? "dark" : "light");
    updateSettings({ theme: checked ? "dark" : "light" });
  };

  return (
    <div
      className="w-screen md:w-full min-h-screen p-2 font-sans"
      style={{ backgroundColor: colors.background.container }}
    >
      <div
        className="w-full p-4 rounded-md shadow-sm"
        style={{ backgroundColor: colors.background.main }}
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
                className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
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
            <ToggleSwitch
              id="showChecklistItems"
              label="Mostrar itens da checklist no quadro"
              checked={settings.showChecklistItems}
              onChange={handleToggleChecklistItems}
              colors={colors}
            />
            <ToggleSwitch
              id="theme"
              label="Tema Escuro"
              checked={settings.theme === "dark"}
              onChange={handleThemeChange}
              colors={colors}
            />
          </div>
        )}

        {activeTab === "profile" && (
          <div
            className="p-4 rounded-md"
            onMouseEnter={() => {
              console.log("Hover profile: true");
              setIsHoverProfile(true);
            }}
            onMouseLeave={() => {
              console.log("Hover profile: false");
              setIsHoverProfile(false);
            }}
            style={{
              backgroundColor: isHoverProfile
                ? colors.background.hoverColor
                : colors.background.container,
            }}
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
