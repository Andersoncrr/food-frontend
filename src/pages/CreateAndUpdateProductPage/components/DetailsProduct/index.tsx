import { formatToColombianPesos } from "@/helpers/formatNumbers";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  createMenuProductByIdUser,
  updateMenuProductById,
} from "@/store/ProductsSlice/actions";
import { Button, Card, Col, Form, Input, InputNumber, Row, Select } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const DetailsProduct = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { menuCategories } = useAppSelector((state) => state.menuCategory);
  const { product } = useAppSelector((state) => state.product);
  const [form] = Form.useForm();

  const categoryOptions = menuCategories.map((option) => ({
    value: option._id,
    label: option.name,
  }));

  const onFinish = async (values) => {
    // if (idMenuProduct) {
    //   dispatch(updateMenuProductById({ _id: idMenuProduct, ...values }));
    // } else {
    const response = await dispatch(createMenuProductByIdUser(values));
    if (createMenuProductByIdUser.fulfilled.match(response)) {
      const { payload } = response;
      navigate(
        `/administrator/products/new/step-2?idMenuProduct=${payload._id}`
      );
    }

    // }
  };

  useEffect(() => {
    if (product) {
      form.setFieldsValue(product);
    }
  }, [product]);

  return (
    <Card title="Detalles del Nuevo Producto">
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Nombre del Producto"
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
          </Col>
          <Col span={12}>
            <Form.Item
              label="Descripcion"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Precio"
              name="price"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <InputNumber
                style={{
                  width: "100%",
                }}
                formatter={(currency: number) =>
                  formatToColombianPesos(currency, "decimal")
                }
                parser={(value) => +value?.replace(/\$\s?|,|\./g, "")}
                prefix="$"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Categoría"
              name="category"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Select options={categoryOptions} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button shape="round" type="primary" htmlType="submit">
            Crear
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
