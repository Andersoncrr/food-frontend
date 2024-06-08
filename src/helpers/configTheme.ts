import { Theme } from "@/types/theme";

export const configTheme = (theme: Theme) => ({
  token: {
    colorPrimary: theme.primary[100],
    colorBgBase: theme.secondary[100],
    colorText: theme.text[100],
    colorBorder: theme.primary[200],
    colorIcon: theme.primary[100],
    colorIconHover: theme.primary[200],
  },
  components: {
    Table: {
      headerBg: theme.primary[200],
      borderColor: theme.primary[200],
      rowHoverBg: theme.secondary[300],
      colorTextHeading: "#FFFFFF",
    },
    Button: {
      primaryShadow: "0 2px 0 rgba(5, 145, 255, 0.1)",
    },
  },
});
