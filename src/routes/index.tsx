import { Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<PublicRoutes />} />
      <Route path="/administrator/*" element={<PrivateRoute />} />
    </Routes>
  );
};
