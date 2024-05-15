import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "@/store";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/providers";
import { StyledAppAntd } from "./mainStyles.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <StyledAppAntd>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </StyledAppAntd>
  </ThemeProvider>
);
