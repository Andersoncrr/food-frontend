import { useAppDispatch, useAppSelector } from "@/hooks";
import { getMenuProductsByIdUser } from "@/store/ProductsSlice/actions/getMenuProductsByIdUser";
import { Button, Card, Table } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { COLUMNS_PRODUCTS } from "./helpers/columns";

export const Products = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { products } = useAppSelector((state) => state.product);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getMenuProductsByIdUser());
    }
  }, []);

  return (
    <>
      <Card
        title="Productos"
        extra={
          <Button
            type="primary"
            shape="round"
            onClick={() => navigate("/administrator/create-product")}
          >
            Crear Nuevo Producto
          </Button>
        }
      >
        <Table dataSource={products} columns={COLUMNS_PRODUCTS} rowKey="_id" />
      </Card>
    </>
  );
};
