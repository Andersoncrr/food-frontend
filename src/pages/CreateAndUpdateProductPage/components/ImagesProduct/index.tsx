import { formatImages } from "@/helpers/formatImages";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { updateProduct } from "@/store/ProductsSlice";
import { InboxOutlined } from "@ant-design/icons";
import { Button, Card, Form, Upload, UploadFile, UploadProps } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const { Dragger } = Upload;

export const ImagesProduct = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const { product } = useAppSelector((state) => state.product);
  const idMenuProduct = searchParams.get("idMenuProduct");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onFinish = () => {
    navigate(
      `/administrator/products/new/step-3/?idMenuProduct=${idMenuProduct}`
    );
  };

  const handleChange: UploadProps["onChange"] = (info) => {
    let newFileList = [...info.fileList];
    const successFiles = info.fileList.every((file) => file.status === "done");
    if (successFiles) {
      dispatch(updateProduct(info.file.response));
      newFileList = formatImages(info.file.response.productImages);
    }
    setFileList(newFileList);
  };

  useEffect(() => {
    if (product.productImages.length > 0) {
      setFileList(formatImages(product.productImages));
    }
  }, [product.productImages]);

  return (
    <Card title="Imagenes del Nuevo Producto">
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item name="images">
          <Dragger
            action={`http://localhost:5001/api/menu-product/image/${idMenuProduct}`}
            multiple
            listType="picture"
            fileList={fileList}
            onChange={handleChange}
            onRemove={(file) => console.log("file", file)}
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
            Siguiente
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
