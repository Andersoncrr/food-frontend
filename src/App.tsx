import { ToastContainer, Zoom } from "react-toastify";
import { AppRoutes } from "./routes";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./styles/GlobalStyle";
import { ConfigProvider, FloatButton } from "antd";
import { MoonOutlined, StarOutlined } from "@ant-design/icons";
import { useTheme } from "@/providers";
import { THEMES } from "./const/themes";
import { configTheme } from "@/helpers/configTheme";

function App() {
  const { themeToggleButtonRef, toggleTheme, theme, themeSelect } = useTheme();

  return (
    <ConfigProvider theme={configTheme(theme)}>
      <AppRoutes />
      <ToastContainer transition={Zoom} theme={themeSelect} />
      <GlobalStyle />
      <FloatButton
        ref={themeToggleButtonRef}
        tooltip={themeSelect === THEMES.dark ? "Modo Claro" : "Modo oscuro"}
        icon={themeSelect === THEMES.dark ? <StarOutlined /> : <MoonOutlined />}
        onClick={toggleTheme}
      />
    </ConfigProvider>
  );
}

export default App;
