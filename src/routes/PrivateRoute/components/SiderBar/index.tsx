import { Avatar, Menu, Typography } from "antd";
import {
  StyledContainerLogo,
  StyledContainerSider,
  StyledSider,
} from "../../styles/sideBarStyles";
import { useLocation, useNavigate } from "react-router-dom";
import { PrivateRoutes } from "@/types/routes";
import { privateRoutes } from "../../privateRoutes";
import { useAppSelector } from "@/hooks";
import logo from "@/assets/logo.png";

const { Title } = Typography;

type Props = {
  collapsed: boolean;
};

export const SideBar = ({ collapsed }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userInfo } = useAppSelector((state) => state.user);
  const defaultSelectMenu = location.pathname.replace("/administrator", "");

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
  );
};
