import { THEMESELECT } from "@/const/themes";
import { useChangeTheme } from "@/hooks";
import { Theme } from "@/types/theme";
import { createContext, useContext, ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

type ThemeContextProps = {
  toggleTheme: () => Promise<void>;
  themeToggleButtonRef: React.RefObject<any>;
  theme: Theme;
  themeSelect: "light" | "dark";
};

const ThemeContext = createContext<ThemeContextProps | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe utilizarse dentro de un ThemeProvider");
  }
  return context;
};

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const {
    theme: themeSelect,
    toggleTheme,
    themeToggleButtonRef,
  } = useChangeTheme();

  const theme = THEMESELECT[themeSelect];

  return (
    <StyledThemeProvider theme={theme}>
      <ThemeContext.Provider
        value={{
          toggleTheme,
          themeToggleButtonRef,
          theme,
          themeSelect,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};
