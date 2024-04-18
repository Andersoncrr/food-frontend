import { useAppDispatch, useAppSelector } from "@/hooks";
import { getMenuCategoriesByIdUser } from "@/store/menuCategorySlice/actions";
import { Button, Flex, Table, Typography } from "antd";
import { useEffect } from "react";
import { COLUMNS } from "./helpers/columns";

const { Title } = Typography;

export const MenuCategories = () => {
  const dispatch = useAppDispatch();
  const { menuCategories } = useAppSelector((state) => state.menuCategory);

  useEffect(() => {
    dispatch(getMenuCategoriesByIdUser());
  }, []);

  return (
    <div>
      <Table
        dataSource={menuCategories}
        columns={COLUMNS}
        rowKey="_id"
        title={() => (
          <Flex justify="space-between">
            <Title level={3}>Categorías del Menú</Title>
            <Button shape="round">Crear Categoría</Button>
          </Flex>
        )}
      />
    </div>
  );
};
