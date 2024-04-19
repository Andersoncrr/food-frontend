import { ToastContainer, Zoom } from "react-toastify";
import { AppRoutes } from "./routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AppRoutes />
      <ToastContainer transition={Zoom} theme="dark" />
    </>
  );
}

export default App;
