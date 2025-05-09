const colors = {
  light: {
    background: {
      main: "#F3F4F6", // gray-100
      container: "#FFFFFF", // white
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
  },
  dark: {
    background: {
      main: "#1F2937", // gray-800
      container: "#374151", // gray-700
    },
    text: {
      primary: "#D1D5DB", // gray-300
      secondary: "#9CA3AF", // gray-400
    },
    toggle: {
      active: "#60A5FA", // blue-400
      inactive: "#6B7280", // gray-500
    },
    tab: {
      active: "#60A5FA", // blue-400
      inactive: "#D1D5DB", // gray-300
      border: "#60A5FA", // blue-400
    },
    sidebar: {
      background: "#374151", // gray-700
    },
  },
};

export function getThemeColors(theme) {
  return colors[theme] || colors.light;
}
