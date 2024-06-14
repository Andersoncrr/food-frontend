import { useAppDispatch } from "@/hooks";
import { createUser } from "@/store/userSlice/actions";
import { CreateCredentials } from "@/types/user";
import { Button, Form, Input } from "antd";
import { StyledCard, StyledRow } from "./styles/createAccountPageStyles";

export const CreateAccountPage = () => {
  const dispatch = useAppDispatch();

  const onFinish = (values: CreateCredentials) => {
    dispatch(createUser(values));
  };

  return (
    <StyledRow justify="center" align="middle">
      <StyledCard title="Crear Cuenta">
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
      </StyledCard>
    </StyledRow>
  );
};
