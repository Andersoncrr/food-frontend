import { useAppDispatch } from "@/hooks";
import {
  createEmployeesByIdUser,
  updateEmployeeById,
} from "@/store/employeeSlice/actions";
import { Button, Form, Input } from "antd";
import { useEffect } from "react";

type Props = {
  onSubmit: () => void;
  employee?: any;
};

export const CreateAndUpdateFormEmployee = ({ onSubmit, employee }: Props) => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    if (employee) {
      form.setFieldsValue(employee);
    }
  }, [employee]);

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
            message: "Please your  name is require!",
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
            message: "Please your position is  required!",
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
            message: "Please your  email  is required!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Teléfono"
        name="phone"
        rules={[
          {
            required: true,
            message: "Please  your phone is  required!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
