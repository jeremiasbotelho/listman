const colors = {
  light: {
    background: {
      main: "#FFF", // white
      container: "#F3F4F6", // gray-100
      hoverColor: "#F9FAFB", // gray-50
    },
    text: {
      primary: "#6B7280", // gray-500
      secondary: "#9CA3AF", // gray-400
    },
    toggle: {
      active: "#3B82F6", // blue-500
      inactive: "#D1D5DB", // gray-300
    },
    tab: {
      active: "#3B82F6", // blue-500
      inactive: "#6B7280", // gray-500
      border: "#3B82F6", // blue-500
    },
    sidebar: {
      background: "#FFFFFF", // white
    },
    navIcon: {
      hoverBackground: "#F5F5F5", // gray-100
      hoverColor: "#3B82F6", // blue-500
      activeColor: "#3B82F6", // blue-500
      inactiveColor: "#6B7280", // gray-500
    },
  },
  dark: {
    background: {
      main: "#181818", // gray-800
      container: "#282828", // gray-900
      hoverColor: "#111", // gray-50
    },
    text: {
      primary: "#F9FAFB", // gray-50
      secondary: "#9CA3AF", // gray-400
    },
    toggle: {
      active: "#3B82F6", // blue-500
      inactive: "#4B5563", // gray-600
    },
    tab: {
      active: "#F9FAFB", // gray-50
      inactive: "#D1D5DB", // gray-300
      border: "#F9FAFB", // gray-50
    },
    sidebar: {
      background: "#181818", // gray-900
    },
    navIcon: {
      hoverBackground: "#282828", // gray-800
      hoverColor: "#FFF", // white
      activeColor: "#FFF", // white
      inactiveColor: "#9CA3AF", // gray-400
    },
  },
};

export function getThemeColors(theme) {
  return colors[theme] || colors.light;
}
