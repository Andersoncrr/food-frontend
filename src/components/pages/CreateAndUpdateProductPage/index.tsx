import { useAppDispatch, useAppSelector } from "@/hooks";
import { resetProduct } from "@/store/ProductsSlice";
import { createProductByIdUser } from "@/store/ProductsSlice/actions/createMenuProductByIdUser";
import { getMenuProductById } from "@/store/ProductsSlice/actions/getMenuProductById";
import { updateMenuProductById } from "@/store/ProductsSlice/actions/updateMenuProductById";
import { getMenuCategoriesByIdUser } from "@/store/menuCategorySlice/actions";
import { Button, Card, Col, Form, Input, Row, Select } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const CreateAndUpdateProductPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { idMenuProduct } = useParams();
  const [form] = Form.useForm();

  const { menuCategories } = useAppSelector((state) => state.menuCategory);
  const { product } = useAppSelector((state) => state.product);

  useEffect(() => {
    if (menuCategories.length === 0) {
      dispatch(getMenuCategoriesByIdUser());
    }
  }, []);
  useEffect(() => {
    if (idMenuProduct) {
      dispatch(getMenuProductById(idMenuProduct));
    }
    return () => {
      dispatch(resetProduct());
    };
  }, []);
  useEffect(() => {
    if (product) {
      form.setFieldsValue(product);
    }
  }, [product]);

  const categoryOptions = menuCategories.map((option) => ({
    value: option._id,
    label: option.name,
  }));

  const onFinish = (values) => {
    if (idMenuProduct) {
      dispatch(updateMenuProductById({ _id: idMenuProduct, ...values }));
    } else {
      dispatch(createProductByIdUser(values));
    }
    navigate("/administrator/products");
  };

  return (
    <Card title="Crear Nuevo Producto">
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
              <Input />
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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
