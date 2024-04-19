import { useAppDispatch, useAppSelector } from "@/hooks";
import { getMenuCategoriesByIdUser } from "@/store/menuCategorySlice/actions";
import { Button, Flex, Modal, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { CreateAndUpdateFormMenuCategory } from "./components/CreateAndUpdateFormMenuCategory";
import { COLUMNS } from "./helpers/columns";

const { Title } = Typography;

export const MenuCategories = () => {
  const dispatch = useAppDispatch();

  const [isOpenModal, setIsOpenModal] = useState(false);

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
            <Button onClick={() => setIsOpenModal(true)} shape="round">
              Crear Categoría
            </Button>
          </Flex>
        )}
      />
      <Modal
        title="Crear Categoría del Menú"
        footer={null}
        open={isOpenModal}
        onCancel={() => setIsOpenModal(false)}
      >
        <CreateAndUpdateFormMenuCategory
          onSubmit={() => setIsOpenModal(false)}
        />
      </Modal>
    </div>
  );
};