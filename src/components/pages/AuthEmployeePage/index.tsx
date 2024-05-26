import { useAppDispatch } from "@/hooks";
import { authEmployee, authUser } from "@/store/userSlice/actions";
import { Button, Form, Input } from "antd";
import { StyledCard, StyledRow } from "./styles/authEmployeePageStyles";
import { AuthEmployeeCredentials } from "@/types/employee";

export const AuthEmployeePage = () => {
  const dispatch = useAppDispatch();

  const onFinish = (values: AuthEmployeeCredentials) => {
    dispatch(authEmployee(values));
  };

  return (
    <StyledRow justify="center" align="middle">
      <StyledCard title="Iniciar Sesión Empleado">
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
