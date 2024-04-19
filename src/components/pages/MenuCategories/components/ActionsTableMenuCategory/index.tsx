import { EditFilled } from "@ant-design/icons";
import { Modal } from "antd";
import { useState } from "react";
import { CreateAndUpdateFormMenuCategory } from "../CreateAndUpdateFormMenuCategory";

export const ActionsTableMenuCategory = ({ menuCategory }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <EditFilled onClick={() => setIsOpenModal(true)} />
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
