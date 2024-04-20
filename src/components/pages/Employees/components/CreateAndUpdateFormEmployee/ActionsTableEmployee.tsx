import { DeleteOutlined, EditFilled } from "@ant-design/icons";
import { Modal } from "antd";
import { useState } from "react";
import { CreateAndUpdateFormEmployee } from ".";
import { useAppDispatch } from "@/hooks";
import { deleteEmployeeById } from "@/store/employeeSlice/actions";

export const ActionsTableEmployee = ({ employee }) => {
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
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
      <DeleteOutlined
        onClick={() => dispatch(deleteEmployeeById(employee._id))}
      />
    </div>
  );
};
