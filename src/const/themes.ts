import { Theme } from "@/types/theme";

export enum THEMES {
  light = "light",
  dark = "dark",
}

export const LIGHTTHEME: Theme = {
  primary: {
    100: "#8134fe",
    200: "#B67DFF",
    300: "#F8F0FF",
  },
  secondary: {
    100: "#fffefb",
    200: "#E9E4ED",
    300: "#F5F3F7",
  },
  text: {
    100: "#000000",
  },
};

export const DARKTHEME: Theme = {
  primary: {
    100: "#8134fe",
    200: "#B67DFF",
    300: "#F8F0FF",
  },
  secondary: {
    "100": "#1A1F2B",
    "200": "#292e3b",
    "300": "#414654",
  },
  text: {
    100: "#FFFFFF",
  },
};

export const THEMESELECT = {
  [THEMES.light]: LIGHTTHEME,
  [THEMES.dark]: DARKTHEME,
};
