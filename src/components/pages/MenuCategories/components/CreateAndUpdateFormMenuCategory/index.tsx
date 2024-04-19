import { useAppDispatch } from "@/hooks";
import { createMenuCategoryByIdUser } from "@/store/menuCategorySlice/actions";
import { Button, Form, Input } from "antd";

type Props = {
  onSubmit: () => void;
};

export const CreateAndUpdateFormMenuCategory = ({ onSubmit }: Props) => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    dispatch(createMenuCategoryByIdUser(values));
    form.resetFields();
    onSubmit();
  };

  return (
    <div>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Nombre"
          name="name"
          rules={[
            {
              required: true,
              message: "Por favor ingresa el nombre.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Descripción"
          name="description"
          rules={[
            {
              required: true,
              message: "Por favor ingresa la description.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button shape="round" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
