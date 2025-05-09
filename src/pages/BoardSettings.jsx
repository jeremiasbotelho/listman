import { useSettings } from "../context/SettingsContext";
import { getThemeColors } from "../styles/colors";

function BoardSettings() {
  const { settings, updateSettings } = useSettings();
  const colors = getThemeColors(settings.theme);

  const handleToggleChecklistItems = (e) => {
    updateSettings({
      showChecklistItems: e.target.checked,
      itemLimit: e.target.checked ? settings.itemLimit || 5 : null,
    });
  };

  const handleItemLimitChange = (e) => {
    const value = e.target.value;
    updateSettings({
      itemLimit: value === "" || value === "0" ? null : parseInt(value),
    });
  };

  return (
    <div
      className="min-h-screen p-6"
      style={{
        backgroundColor: colors.background.main,
        color: colors.text.primary,
      }}
    >
      <h1 className="text-lg font-semibold mb-6">Configurações do Quadro</h1>
      <div
        className="p-6 rounded-md shadow-md"
        style={{ backgroundColor: colors.background.container }}
      >
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="showChecklistItems"
            checked={settings.showChecklistItems}
            onChange={handleToggleChecklistItems}
            className="w-5 h-5 rounded focus:ring-2"
            style={{
              backgroundColor: settings.showChecklistItems
                ? colors.toggle.active
                : colors.toggle.inactive,
              borderColor: colors.toggle.inactive,
              accentColor: colors.toggle.active,
            }}
          />
          <label
            htmlFor="showChecklistItems"
            className="ml-3 text-base font-medium"
          >
            Mostrar itens da checklist no quadro
          </label>
        </div>
        {settings.showChecklistItems && (
          <div className="ml-8">
            <label
              htmlFor="itemLimit"
              className="block text-sm font-medium"
              style={{ color: colors.text.secondary }}
            >
              Limitar quantidade de itens exibidos
            </label>
            <input
              type="number"
              id="itemLimit"
              value={settings.itemLimit || ""}
              onChange={handleItemLimitChange}
              min="1"
              placeholder="Sem limite"
              className="w-32 p-2 rounded text-base focus:outline-none focus:ring-2"
              style={{
                backgroundColor: colors.background.container,
                borderColor: colors.toggle.inactive,
                color: colors.text.primary,
                focusRingColor: colors.toggle.active,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default BoardSettings;
