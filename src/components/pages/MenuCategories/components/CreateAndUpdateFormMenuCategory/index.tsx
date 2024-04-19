import { useAppDispatch } from "@/hooks";
import { createMenuCategoryByIdUser } from "@/store/menuCategorySlice/actions";
import { updateMenuCategoryById } from "@/store/menuCategorySlice/actions/updateMenuCategoryById";
import { Button, Form, Input } from "antd";
import { useEffect } from "react";

type Props = {
  onSubmit: () => void;
  menuCategory?: any;
};

export const CreateAndUpdateFormMenuCategory = ({
  onSubmit,
  menuCategory,
}: Props) => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    if (menuCategory) {
      form.setFieldsValue(menuCategory);
    }
  }, [menuCategory]);

  const onFinish = async (values) => {
    if (menuCategory) {
      dispatch(updateMenuCategoryById({ ...values, _id: menuCategory._id }));
    } else {
      dispatch(createMenuCategoryByIdUser(values));
    }
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
