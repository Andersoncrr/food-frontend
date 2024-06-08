import { useState } from "react";
import { useAppSelector } from "@/hooks";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes } from "./privateRoutes";
import { PrivateRoutes } from "@/types/routes";
import {
  StyledContentContainer,
  StyledLayoutContainer,
  StyledLayoutContainerContent,
} from "./styles/privateRouteStyles";
import { SideBar } from "./components/SiderBar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const PrivateRoute = () => {
  const { token, userInfo } = useAppSelector((state) => state.user);
  const [collapsed, setCollapsed] = useState(false);

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
      if (route.items) {
        return getPrivateRoutes(route.items);
      }
      return (
        <Route key={route.path} path={route.path} element={route.component} />
      );
    });

    return renderPrivateRoutes;
  };

  const onChangeCollapse = (isCollapsed: boolean) => {
    setCollapsed(isCollapsed);
  };

  return (
    <StyledLayoutContainer>
      <SideBar collapsed={collapsed} />
      <StyledLayoutContainerContent>
        <Header onChangeCollapse={onChangeCollapse} collapsed={collapsed} />
        <StyledContentContainer>
          <Routes>
            {getPrivateRoutes(privateRoutes)}
            <Route path="/*" element={<Navigate to="/account" />} />
          </Routes>
        </StyledContentContainer>
        <Footer />
      </StyledLayoutContainerContent>
    </StyledLayoutContainer>
  );
};
