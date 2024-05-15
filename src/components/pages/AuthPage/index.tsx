import { useAppDispatch } from "@/hooks";
import { authUser } from "@/store/userSlice/actions";
import { AuthCredentials } from "@/types/user";
import { Button, Form, Input } from "antd";
import { StyledCard, StyledRow } from "./styles/authPageStyles";

export const AuthPage = () => {
  const dispatch = useAppDispatch();

  const onFinish = (values: AuthCredentials) => {
    dispatch(authUser(values));
  };

  return (
    <StyledRow justify="center" align="middle">
      <StyledCard title="Iniciar Sesión">
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </StyledCard>
    </StyledRow>
  );
};
