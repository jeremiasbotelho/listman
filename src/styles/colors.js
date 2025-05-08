const colors = {
  // Cores primárias
  primary: {
    blue: "#3B82F6", // Azul principal (Tailwind blue-500)
    gray: "#6B7280", // Cinza principal (Tailwind gray-500)
  },

  // Cores secundárias (mais claras para tema claro, mais escuras para tema escuro)
  secondary: {
    blue: {
      light: "#93C5FD", // Azul claro (Tailwind blue-300)
      dark: "#1E40AF", // Azul escuro (Tailwind blue-800)
    },
    gray: {
      light: "#D1D5DB", // Cinza claro (Tailwind gray-300)
      dark: "#374151", // Cinza escuro (Tailwind gray-700)
    },
  },

  // Cores para botões ativos, abas selecionadas, etc.
  active: {
    border: "#3B82F6", // Borda ativa (Tailwind blue-500)
    text: "#2563EB", // Texto ativo (Tailwind blue-600)
  },

  // Textos clicáveis
  clickable: {
    default: "#3B82F6", // Azul padrão (Tailwind blue-500)
    hover: "#2563EB", // Azul hover (Tailwind blue-600)
  },

  // Fundo e containers
  background: {
    main: "#F3F4F6", // Fundo claro (Tailwind gray-100)
    container: "#FFFFFF", // Branco para containers
  },

  // Tema escuro (opcional, para futura implementação)
  dark: {
    background: {
      main: "#1F2937", // Fundo escuro (Tailwind gray-800)
      container: "#374151", // Container escuro (Tailwind gray-700)
    },
  },
};

// Função para acessar cores com tema
const getThemeColors = (theme = "light") => ({
  ...colors,
  background: theme === "dark" ? colors.dark.background : colors.background,
  secondary: {
    blue:
      theme === "dark"
        ? colors.secondary.blue.dark
        : colors.secondary.blue.light,
    gray:
      theme === "dark"
        ? colors.secondary.gray.dark
        : colors.secondary.gray.light,
  },
});

export default getThemeColors;
