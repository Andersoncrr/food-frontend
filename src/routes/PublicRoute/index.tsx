import { AuthPage, CreateAccountPage } from "@/components/pages";
import { useAppSelector } from "@/hooks";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Avatar, Button, Layout, Row } from "antd";
import styles from "./publicRoute.module.css";

const { Header, Footer, Content } = Layout;

export const PublicRoutes = () => {
  const navigate = useNavigate();
  const { token } = useAppSelector((state) => state.user);

  if (token) {
    return <Navigate to="/administrator/account" />;
  }

  return (
    <Layout style={{ height: "100%" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar size={100} src={<img src={logo} />} />
        <Row className={styles.header__container} justify="end">
          <Button
            style={{ color: "white" }}
            type="text"
            onClick={() => navigate("/auth")}
          >
            Iniciar Sesión
          </Button>
          <Button
            style={{ color: "white" }}
            type="text"
            onClick={() => navigate("/create-account")}
          >
            Crear Cuenta
          </Button>
        </Row>
      </Header>
      <Content>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/*" element={<Navigate to="/auth" />} />
        </Routes>
      </Content>
      <Footer>
        Food App ©{new Date().getFullYear()} Created by Anderson and Yicel
      </Footer>
    </Layout>
  );
};
