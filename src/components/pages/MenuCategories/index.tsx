import { useAppDispatch, useAppSelector } from "@/hooks";
import { getMenuCategoriesByIdUser } from "@/store/menuCategorySlice/actions";
import { Button, Card, Modal, Table } from "antd";
import { useEffect, useState } from "react";
import { CreateAndUpdateFormMenuCategory } from "./components/CreateAndUpdateFormMenuCategory";
import { COLUMNS } from "./helpers/columns";

export const MenuCategories = () => {
  const dispatch = useAppDispatch();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const { menuCategories } = useAppSelector((state) => state.menuCategory);

  useEffect(() => {
    if (menuCategories.length === 0) {
      dispatch(getMenuCategoriesByIdUser());
    }
  }, []);

  return (
    <Card
      title="Categorías del Menú"
      extra={
        <Button
          onClick={() => setIsOpenModal(true)}
          shape="round"
          type="primary"
        >
          Crear Categoría
        </Button>
      }
    >
      <Table dataSource={menuCategories} columns={COLUMNS} rowKey="_id" />
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
    </Card>
  );
};
