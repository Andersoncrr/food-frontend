import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "@/store";
import { BrowserRouter } from "react-router-dom";
import { App as AppAntd } from "antd";
import { ThemeProvider } from "@/providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <AppAntd className="h-screen">
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </AppAntd>
  </ThemeProvider>
);
