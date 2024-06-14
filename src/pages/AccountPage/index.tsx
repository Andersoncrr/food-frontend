import { useAppDispatch, useAppSelector } from "@/hooks";
import { updateUserById } from "@/store/userSlice/actions";
import { Avatar, Button, Card, Col, Form, Input, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { useEffect } from "react";
import { useTheme } from "styled-components";

export const AccountPage = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const [form] = Form.useForm();
  const { userInfo, loading } = useAppSelector((state) => state.user);

  const onFinish = (values) => {
    dispatch(updateUserById(values));
  };

  useEffect(() => {
    if (userInfo) {
      form.setFieldsValue({
        name: userInfo.name,
        lastName: userInfo.lastName,
        email: userInfo.email,
      });
    }
  }, [userInfo]);

  return (
    <Card
      cover={
        <img
          height={250}
          src="https://t3.ftcdn.net/jpg/02/97/67/70/360_F_297677001_zX7ZzRq8DObUV5IWTHAIhAae6DuiEQh4.jpg"
        />
      }
      style={{ borderRadius: "15px" }}
    >
      <Meta
        avatar={
          <Avatar
            size={150}
            style={{ backgroundColor: theme.primary[100] }}
            src="https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small_2x/happy-young-cute-illustration-face-profile-png.png"
          />
        }
        title={`${userInfo.name} ${userInfo.lastName}`}
        description={userInfo.email}
      />
      <Form
        form={form}
        style={{ marginTop: "20px" }}
        layout="vertical"
        onFinish={onFinish}
      >
        <Row gutter={16}>
          <Col md={12} xs={24}>
            <Form.Item
              label="Nombres"
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
          <Col md={12} xs={24}>
            <Form.Item
              label="Apellidos"
              name="lastName"
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
          <Col md={12} xs={24}>
            <Form.Item
              label="Correo Electronico"
              name="email"
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
          <Col md={12} xs={24}>
            <Form.Item label="Contraseña" name="password">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button
            loading={loading}
            type="primary"
            shape="round"
            htmlType="submit"
          >
            Actualizar
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
