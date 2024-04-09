import { useAppSelector } from "@/hooks";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes } from "./privateRoutes";
import { PrivateRoutes } from "@/types/routes";

export const PrivateRoute = () => {
  const { token, userInfo } = useAppSelector((state) => state.user);

  if (!token) {
    return <Navigate to="/" />;
  }

  const getPrivateRoutes = (privateRoutes: PrivateRoutes) => {
    const renderPrivateRoutes = privateRoutes.map((route) => {
      if (
        !route.permissions?.some((permission) =>
          userInfo.permissions.includes(permission)
        )
      ) {
        return null;
      }
      return (
        <Route key={route.path} path={route.path} element={route.component} />
      );
    });

    return renderPrivateRoutes;
  };

  return <Routes>{getPrivateRoutes(privateRoutes)}</Routes>;
};
