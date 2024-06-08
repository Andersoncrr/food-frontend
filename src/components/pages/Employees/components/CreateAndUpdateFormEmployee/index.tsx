import { OPTIONS_PERMISSIONS } from "@/const/general";
import { useAppDispatch } from "@/hooks";
import {
  createEmployeesByIdUser,
  updateEmployeeById,
} from "@/store/employeeSlice/actions";
import { Button, Col, Form, Input, Row, Switch } from "antd";
import { useEffect } from "react";

type Props = {
  onSubmit: () => void;
  employee?: any;
};

export const CreateAndUpdateFormEmployee = ({ onSubmit, employee }: Props) => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const values = Form.useWatch([], form);

  useEffect(() => {
    if (employee) {
      form.setFieldsValue(employee);
    }
  }, [employee]);

  const handleSwitchChange = (checked: boolean, permissionId: string) => {
    const currentPermissions = values.permissions || [];

    const updatedPermissions = checked
      ? [...currentPermissions, permissionId]
      : currentPermissions.filter((id) => id !== permissionId);

    form.setFieldValue("permissions", updatedPermissions);
  };

  const onFinish = (values) => {
    if (employee) {
      dispatch(updateEmployeeById({ ...values, _id: employee._id }));
    } else {
      dispatch(createEmployeesByIdUser(values));
    }

    form.resetFields();
    onSubmit();
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Nombre"
        name="name"
        rules={[
          {
            required: true,
            message: "Please your name is required!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Posición"
        name="position"
        rules={[
          {
            required: true,
            message: "Please your position is required!",
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
            message: "Please your email is required!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Row gutter={16}>
        <Col md={12} xs={24}>
          <Form.Item
            label="Teléfono"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please your phone is required!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col md={12} xs={24}>
          <Form.Item
            label="Contraseña"
            name="password"
            rules={[
              {
                required: true,
                message: "Please your password is required!",
              },
            ]}
          >
            <Input type="password" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        {OPTIONS_PERMISSIONS.map((permission) => (
          <Col key={permission.id} md={5} xs={24}>
            <Form.Item name="permissions" label={permission.name}>
              <Switch
                checked={(values?.permissions || []).includes(permission.id)}
                onChange={(checked) =>
                  handleSwitchChange(checked, permission.id)
                }
              />
            </Form.Item>
          </Col>
        ))}
      </Row>

      <Form.Item>
        <Button shape="round" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
