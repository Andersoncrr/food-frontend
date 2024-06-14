import { useAppDispatch } from "@/hooks";
import { updateTableById } from "@/store/TableSlice/actions";
import { createTableByIdUser } from "@/store/TableSlice/actions/createTableByIdUser";
import { Button, Form, Input } from "antd";
import { useEffect } from "react";

type Props = {
  onSubmit: () => void;
  table?: {
    number: number;
    capacity: number;
    _id: string;
  };
};

export const CreateAndUpdateFormTable = ({ onSubmit, table }: Props) => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (table) {
      dispatch(updateTableById({ ...values, idTable: table._id }));
    } else {
      dispatch(createTableByIdUser(values));
    }

    form.resetFields();
    onSubmit();
  };
  useEffect(() => {
    if (table) {
      form.setFieldsValue(table);
    }
  }, [table]);

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Número"
        name="number"
        rules={[
          {
            required: true,
            message: "Please your  number is require!",
          },
        ]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        label="Capacidad"
        name="capacity"
        rules={[
          {
            required: true,
            message: "Please your capacity is  required!",
          },
        ]}
      >
        <Input type="number" />
      </Form.Item>

      <Form.Item>
        <Button shape="round" type="primary" htmlType="submit">
          {table ? "Editar" : "Crear"}
        </Button>
      </Form.Item>
    </Form>
  );
};
