import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { App, Modal } from "antd";
import { useState } from "react";
import { CreateAndUpdateFormEmployee } from ".";
import { useAppDispatch } from "@/hooks";
import { deleteEmployeeById } from "@/store/employeeSlice/actions";
import { StyledContainerActions } from "../../styles/actionsTableEmployeeStyles";

export const ActionsTableEmployee = ({ employee }) => {
  const { modal } = App.useApp();
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState(false);

  return (
    <StyledContainerActions>
      <EditTwoTone onClick={() => setOpenModal(true)} />
      <DeleteTwoTone
        onClick={() =>
          modal.confirm({
            title: "Confirmar eliminación",
            content: "¿Estás seguro de que deseas eliminar este empleado?",
            onOk() {
              dispatch(deleteEmployeeById(employee._id));
            },
          })
        }
      />
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
    </StyledContainerActions>
  );
};
