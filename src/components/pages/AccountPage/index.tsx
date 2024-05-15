import { useAppSelector } from "@/hooks";
import { Avatar, Button, Card, Col, Form, Input, Row } from "antd";
import Meta from "antd/es/card/Meta";

export const AccountPage = () => {
  const { userInfo } = useAppSelector((state) => state.user);
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
            src="https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small_2x/happy-young-cute-illustration-face-profile-png.png"
          />
        }
        title={userInfo.name}
        description={userInfo.email}
      />
      <Form style={{ marginTop: "20px" }} layout="vertical" onFinish={() => {}}>
        <Row gutter={16}>
          <Col span={12}>
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
          <Col span={12}>
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
        </Row>
        <Row gutter={16}>
          <Col span={12}>
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
          </Col>
          <Col span={12}>
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
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" shape="round" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
