import { Theme } from "@/types/theme";

export const LIGHTTHEME: Theme = {
  primary: {
    100: "#2C2C2C",
    200: "#555555",
    300: "#b0b0b0",
  },
  accent: {
    100: "#BEBEBE",
    200: "#616161",
  },
  text: {
    100: "#000000",
    200: "#2c2c2c",
    300: "#555555",
  },
  bg: {
    100: "#F1F1F1",
    200: "#e7e7e7",
    300: "#bebebe",
  },
  error: {
    100: "#FFD1D1",
    200: "#E41317",
    300: "#870002",
  },
  success: {
    100: "#C8FFBF",
    200: "#45CB51",
    300: "#006909",
  },
};

export const DARKTHEME: Theme = {
  primary: {
    100: "#6c35de",
    200: "#a364ff",
    300: "#ffc7ff",
  },
  accent: {
    100: "#cb80ff",
    200: "#373737",
  },
  text: {
    100: "#f3f3f3",
    200: "#e0e0e0",
    300: "#CCCCCC",
  },
  bg: {
    100: "#100d25",
    200: "#090325",
    300: "#040819",
  },
  error: {
    100: "#FFD1D1",
    200: "#E41317",
    300: "#870002",
  },
  success: {
    100: "#C8FFBF",
    200: "#45CB51",
    300: "#006909",
  },
};

export const THEMESELECT = {
  "light-theme": LIGHTTHEME,
  "dark-theme": DARKTHEME,
};
