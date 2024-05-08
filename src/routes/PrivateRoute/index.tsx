import { useState } from "react";
import { useAppSelector } from "@/hooks";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { privateRoutes } from "./privateRoutes";
import { PrivateRoutes } from "@/types/routes";
import { Avatar, Button, Flex, Layout, Menu, Typography } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import logo from "@/assets/logo.png";

const { Title } = Typography;

export const PrivateRoute = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const defaultSelectMenu = location.pathname.replace("/administrator", "");

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

  const getOptionsMenu = (privateRoutes: PrivateRoutes) => {
    const optionsMenu = privateRoutes.map((route) => {
      if (
        !route.permissions?.some((permission) =>
          userInfo.permissions.includes(permission)
        ) ||
        route.hidden
      ) {
        return null;
      }
      if (route.items) {
        return {
          key: route.path,
          label: route.name,
          children: getOptionsMenu(route.items),
        };
      }
      return {
        key: route.path,
        label: route.name,
      };
    });
    return optionsMenu;
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <div style={{ backgroundColor: "white" }}>
        <Sider
          style={{ borderBottomRightRadius: "30px", height: "100%" }}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <Flex gap="middle" align="center" justify="center" className="p-4">
            <Avatar
              className="bg-white"
              shape="circle"
              size={40}
              src={<img src={logo} />}
            />
            {!collapsed && (
              <Title level={5} style={{ color: "white", margin: "0" }}>
                Food App
              </Title>
            )}
          </Flex>
          <Menu
            onClick={(e) => navigate(`/administrator${e.key}`)}
            mode="inline"
            theme="dark"
            defaultSelectedKeys={[defaultSelectMenu]}
            items={getOptionsMenu(privateRoutes)}
          />
        </Sider>
      </div>

      <Layout style={{ backgroundColor: "#001529" }}>
        <div style={{ backgroundColor: "#F1F1F1" }}>
          <Header
            style={{
              padding: 0,
              borderBottomRightRadius: "30px",
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
                color: "white",
              }}
            />
          </Header>
        </div>
        <Content
          style={{
            padding: 24,
            backgroundColor: "#F1F1F1",
            borderTopLeftRadius: "30px",
          }}
        >
          <div
            style={{
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
              overflow: "hidden",
            }}
          >
            <Routes>
              {getPrivateRoutes(privateRoutes)}
              <Route path="/*" element={<Navigate to="/account" />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ backgroundColor: "white" }}>
          Food App @2024 Created by Anderson Cruz and Yicel Gutierrez
        </Footer>
      </Layout>
    </Layout>
  );
};
