import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";

export const AccountPage = () => {
  return (
    <div>
      <Sider trigger={null}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",

              label: "nav 1",
            },
            {
              key: "2",

              label: "nav 2",
            },
            {
              key: "3",

              label: "nav 3",
            },
          ]}
        />
      </Sider>
    </div>
  );
};
