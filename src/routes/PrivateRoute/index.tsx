import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { privateRoutes } from "./privateRoutes";
import { PrivateRoutes } from "@/types/routes";
import { Avatar, Button, Dropdown, Flex, Layout, Menu, Typography } from "antd";
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
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
import { resetUser } from "@/store/userSlice";

const { Title, Paragraph } = Typography;
const { Footer } = Layout;

export const PrivateRoute = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
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

  const logout = () => {
    localStorage.clear();
    dispatch(resetUser());
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
            <Flex
              style={{ height: "100%" }}
              align="center"
              justify="space-between"
            >
              <StyledButtonCollapsed
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
              />
              <Dropdown
                menu={{
                  items: [
                    {
                      key: "1",
                      label: "Cerrar Sesión",
                      icon: <LogoutOutlined />,
                      onClick: logout,
                    },
                  ],
                }}
              >
                <Button type="link">
                  <Flex gap={8} align="center">
                    <Paragraph>{`${userInfo.name} ${userInfo.lastName}`}</Paragraph>
                    <Avatar
                      style={{ backgroundColor: theme.primary[100] }}
                      src="https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small_2x/happy-young-cute-illustration-face-profile-png.png"
                    />
                  </Flex>
                </Button>
              </Dropdown>
            </Flex>
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
