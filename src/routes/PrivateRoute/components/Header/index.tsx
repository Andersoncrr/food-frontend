import { Avatar, Button, Dropdown, Flex, Typography } from "antd";
import {
  StyledButtonCollapsed,
  StyledContainerHeader,
  StyledHeader,
} from "../../styles/headerStyles";
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { resetUser } from "@/store/userSlice";
import { useTheme } from "styled-components";

const { Paragraph } = Typography;

type Props = {
  onChangeCollapse: (isCollapsed: boolean) => void;
  collapsed: boolean;
};

export const Header = ({ onChangeCollapse, collapsed }: Props) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const { userInfo } = useAppSelector((state) => state.user);

  const logout = () => {
    localStorage.clear();
    dispatch(resetUser());
  };
  return (
    <StyledContainerHeader>
      <StyledHeader>
        <Flex style={{ height: "100%" }} align="center" justify="space-between">
          <StyledButtonCollapsed
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => onChangeCollapse(!collapsed)}
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
  );
};
