import { ToastContainer, Zoom } from "react-toastify";
import { AppRoutes } from "./routes";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./styles/GlobalStyle";
import { ConfigProvider, FloatButton } from "antd";
import { MoonOutlined, StarOutlined } from "@ant-design/icons";
import { useTheme } from "@/providers";
import { THEMESELECT } from "./const/themes";

function App() {
  const { themeToggleButtonRef, toggleTheme, theme } = useTheme();
  return (
    <ConfigProvider
      theme={{
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
      }}
    >
      <AppRoutes />
      <ToastContainer transition={Zoom} theme="dark" />
      <GlobalStyle />
      <FloatButton
        ref={themeToggleButtonRef}
        tooltip={
          theme === THEMESELECT["dark-theme"] ? "Modo Claro" : "Modo oscuro"
        }
        icon={
          theme === THEMESELECT["dark-theme"] ? (
            <StarOutlined />
          ) : (
            <MoonOutlined />
          )
        }
        onClick={toggleTheme}
      />
    </ConfigProvider>
  );
}

export default App;
