import { useSettings } from "../context/SettingsContext";
import { getThemeColors } from "../styles/colors";

function Board() {
  const { settings } = useSettings();
  const colors = getThemeColors(settings.theme);

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
          Quadro
        </h1>
        <p style={{ color: colors.text.secondary }}>
          Placeholder para a tela de quadro.
        </p>
      </div>
    </div>
  );
}

export default Board;
