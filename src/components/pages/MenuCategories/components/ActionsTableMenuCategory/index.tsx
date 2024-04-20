import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { App, Modal } from "antd";
import { useState } from "react";
import { CreateAndUpdateFormMenuCategory } from "../CreateAndUpdateFormMenuCategory";
import { useAppDispatch } from "@/hooks";
import { deleteMenuCategoryById } from "@/store/menuCategorySlice/actions/deleteMenuCategoryById";

export const ActionsTableMenuCategory = ({ menuCategory }) => {
  const { modal } = App.useApp();
  const dispatch = useAppDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="flex gap-2">
      <EditTwoTone onClick={() => setIsOpenModal(true)} />
      <DeleteTwoTone
        onClick={() =>
          modal.confirm({
            title: "Confirmar eliminación",
            content:
              "¿Estás seguro de que deseas eliminar esta categoría de menú?",
            onOk() {
              dispatch(deleteMenuCategoryById(menuCategory._id));
            },
          })
        }
      />
      <Modal
        title="Editar Categoría del Menú"
        footer={null}
        open={isOpenModal}
        onCancel={() => setIsOpenModal(false)}
      >
        <CreateAndUpdateFormMenuCategory
          onSubmit={() => setIsOpenModal(false)}
          menuCategory={menuCategory}
        />
      </Modal>
    </div>
  );
};
