import { useAppSelector } from "@/hooks";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import { StyledLayout } from "./styles/publicRoutesStyles";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { publicRoutes } from "./publicRoutes";

const { Content } = Layout;

export const PublicRoutes = () => {
  const { token } = useAppSelector((state) => state.user);

  if (token) {
    return <Navigate to="/administrator/account" />;
  }

  return (
    <StyledLayout>
      <Header />
      <Content>
        <Routes>
          {publicRoutes.map((publicRoute) => (
            <Route path={publicRoute.path} element={publicRoute.component} />
          ))}
          <Route path="/*" element={<Navigate to="/auth" />} />
        </Routes>
      </Content>
      <Footer />
    </StyledLayout>
  );
};
