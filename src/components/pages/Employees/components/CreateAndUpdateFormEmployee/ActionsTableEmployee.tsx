import { EditFilled } from "@ant-design/icons";
import { Modal } from "antd";
import { useState } from "react";
import { CreateAndUpdateFormEmployee } from ".";

export const ActionsTableEmployee = ({ employee }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <EditFilled onClick={() => setOpenModal(true)} />
      <Modal
        footer={null}
        title="Crear Empleado"
        open={openModal}
        onCancel={() => setOpenModal(false)}
      >
        <CreateAndUpdateFormEmployee
          employee={employee}
          onSubmit={() => setOpenModal(false)}
        />
      </Modal>
    </div>
  );
};
