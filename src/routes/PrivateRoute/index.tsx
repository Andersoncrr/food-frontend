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
import { Avatar, Layout, Menu, Typography } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import logo from "@/assets/logo.png";
import { useTheme } from "styled-components";
import {
  StyledButtonCollapsed,
  StyledContainer,
  StyledContainerHeader,
  StyledContainerLogo,
  StyledContainerSider,
  StyledContentContainer,
  StyledHeader,
  StyledLayoutContainer,
  StyledLayoutContainerContent,
  StyledSider,
} from "./styles/privateRouteStyles";

const { Title } = Typography;
const { Footer } = Layout;

export const PrivateRoute = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const defaultSelectMenu = location.pathname.replace("/administrator", "");

  const { token, userInfo } = useAppSelector((state) => state.user);
  const theme = useTheme();
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
    <StyledLayoutContainer>
      <StyledContainerSider>
        <StyledSider trigger={null} collapsible collapsed={collapsed}>
          <StyledContainerLogo gap="middle" align="center" justify="center">
            <Avatar shape="circle" size={40} src={<img src={logo} />} />
            {!collapsed && <Title level={5}>Food App</Title>}
          </StyledContainerLogo>
          <Menu
            onClick={(e) => navigate(`/administrator${e.key}`)}
            mode="inline"
            defaultSelectedKeys={[defaultSelectMenu]}
            items={getOptionsMenu(privateRoutes)}
            style={{ border: "none" }}
          />
        </StyledSider>
      </StyledContainerSider>

      <StyledLayoutContainerContent>
        <StyledContainerHeader>
          <StyledHeader>
            <StyledButtonCollapsed
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />
          </StyledHeader>
        </StyledContainerHeader>
        <StyledContentContainer>
          <StyledContainer>
            <Routes>
              {getPrivateRoutes(privateRoutes)}
              <Route path="/*" element={<Navigate to="/account" />} />
            </Routes>
          </StyledContainer>
        </StyledContentContainer>
        <Footer style={{ backgroundColor: theme.secondary[200] }}>
          Food App @2024 Created by Anderson Cruz and Yicel Gutierrez
        </Footer>
      </StyledLayoutContainerContent>
    </StyledLayoutContainer>
  );
};
