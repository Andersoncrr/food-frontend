import { InboxOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Form, Upload } from "antd";
import { useNavigate } from "react-router-dom";

const { Dragger } = Upload;

export const ImagesProduct = () => {
  const navigate = useNavigate();

  const normFile = (e: any) => {
    return e?.fileList;
  };

  const onFinish = (values) => {
    navigate("/administrator/products/new/step-3");
  };
  return (
    <Card title="Imagenes del Nuevo Producto">
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item
          name="images"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Dragger
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            multiple
            listType="picture"
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
        </Form.Item>
        <Form.Item>
          <Button shape="round" type="primary" htmlType="submit">
            Crear
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
