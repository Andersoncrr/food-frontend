import { ToastContainer, Zoom } from "react-toastify";
import { AppRoutes } from "./routes";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./styles/GlobalStyle";
import { FloatButton } from "antd";
import { MoonOutlined, StarOutlined } from "@ant-design/icons";
import { useTheme } from "@/providers";
import { THEMESELECT } from "./const/themes";

function App() {
  const { themeToggleButtonRef, toggleTheme, theme } = useTheme();
  return (
    <>
      <AppRoutes />
      <ToastContainer transition={Zoom} theme="dark" />
      <GlobalStyle />
      <FloatButton
        ref={themeToggleButtonRef}
        tooltip="Modo oscuro"
        icon={
          theme === THEMESELECT["dark-theme"] ? (
            <StarOutlined />
          ) : (
            <MoonOutlined />
          )
        }
        onClick={toggleTheme}
      />
    </>
  );
}

export default App;
