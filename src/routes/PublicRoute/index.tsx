import { AuthPage, CreateAccountPage } from "@/components/pages";
import { useAppSelector } from "@/hooks";
import { Navigate, Route, Routes } from "react-router-dom";
import logo from "@/assets/logo-food.png";
import { Avatar, Layout } from "antd";
const { Header, Footer, Content } = Layout;

export const PublicRoutes = () => {
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
