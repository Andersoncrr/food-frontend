import { useState } from "react";
import { useAppSelector } from "@/hooks";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { privateRoutes } from "./privateRoutes";
import { PrivateRoutes } from "@/types/routes";
import { Button, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

export const PrivateRoute = () => {
  const navigate = useNavigate();

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
        )
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
    <Layout style={{ height: "100%" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          onClick={(e) => navigate(`/administrator${e.key}`)}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={getOptionsMenu(privateRoutes)}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }}>
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
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "white",
            borderRadius: "10px",
          }}
        >
          <Routes>
            {getPrivateRoutes(privateRoutes)}
            <Route path="/*" element={<Navigate to="/account" />} />
          </Routes>
        </Content>
        <Footer>
          Food App @2024 Created by Anderson Cruz and Yicel Gutierrez
        </Footer>
      </Layout>
    </Layout>
  );
};
