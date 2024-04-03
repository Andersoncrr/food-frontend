import { useAppDispatch } from "@/hooks";
import { createUser } from "@/store/userSlice/actions";
import { CreateCredentials } from "@/types/user";
import { Button, Card, Form, Input, Row } from "antd";

export const CreateAccountPage = () => {
  const dispatch = useAppDispatch();

  const onFinish = (values: CreateCredentials) => {
    dispatch(createUser(values));
  };

  return (
    <Row justify="center" align="middle" className="h-full">
      <Card className="w-96">
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Nombre"
            name="name"
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
            label="Correo"
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
            label="Contraseña"
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
              Crear
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
};
