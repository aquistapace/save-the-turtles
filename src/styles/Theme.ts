export const themes = {
  light: {
    primary: "#00d2ff",
    secondary: "#3a7bd5",
    white: "#fff",
    gray: "#ccc",
  },
  dark: {
    primary: " yellow",
    secondary: "orange",
    white: "#fff",
    gray: "#333333",
  },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light | typeof themes.dark;
