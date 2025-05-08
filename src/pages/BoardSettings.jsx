import { useSettings } from "../context/SettingsContext";

function BoardSettings() {
  const { settings, updateSettings } = useSettings();

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
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-semibold mb-6">Configurações do Quadro</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="showChecklistItems"
            checked={settings.showChecklistItems}
            onChange={handleToggleChecklistItems}
            className="w-5 h-5 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
          />
          <label
            htmlFor="showChecklistItems"
            className="ml-3 text-lg font-medium"
          >
            Mostrar itens da checklist no quadro
          </label>
        </div>
        {settings.showChecklistItems && (
          <div className="ml-8">
            <label
              htmlFor="itemLimit"
              className="block text-sm font-medium text-gray-300 mb-2"
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
              className="w-32 p-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default BoardSettings;
