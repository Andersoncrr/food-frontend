import { Button, Flex, Modal, Table, Typography } from "antd";
import { CreateAndUpdateFormEmployee } from "./components/CreateAndUpdateFormEmployee";
import { COLUMNS } from "./helpers/columns";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect, useState } from "react";
import { getEmployeesByIdUser } from "@/store/employeeSlice/actions";

const { Title } = Typography;

export const Employees = () => {
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState(false);

  const { employees } = useAppSelector((state) => state.employee);

  useEffect(() => {
    dispatch(getEmployeesByIdUser());
  }, []);

  return (
    <div>
      <Table
        dataSource={employees}
        columns={COLUMNS}
        rowKey="_id"
        title={() => (
          <Flex justify="space-between">
            <Title level={3}>Empleados</Title>
            <Button shape="round" onClick={() => setOpenModal(true)}>
              Crear Empleado
            </Button>
          </Flex>
        )}
      />
      <Modal
        footer={null}
        title="Crear Empleado"
        open={openModal}
        onCancel={() => setOpenModal(false)}
      >
        <CreateAndUpdateFormEmployee onSubmit={() => setOpenModal(false)} />
      </Modal>
    </div>
  );
};
