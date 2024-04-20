import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "@/store";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, App as AppAntd } from "antd";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider
    theme={{
      token: {},
    }}
  >
    <AppAntd className="h-screen">
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </AppAntd>
  </ConfigProvider>
);
