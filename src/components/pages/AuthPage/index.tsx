import { useAppDispatch } from "@/hooks";
import { authUser } from "@/store/userSlice/actions";
import { AuthCredentials } from "@/types/user";
import { Button, Card, Form, Input, Row } from "antd";

export const AuthPage = () => {
  const dispatch = useAppDispatch();

  const onFinish = (values: AuthCredentials) => {
    dispatch(authUser(values));
  };

  return (
    <Row justify="center" align="middle" className="h-full">
      <Card className="w-96">
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
      </Card>
    </Row>
  );
};
