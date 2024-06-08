import { Button, Card, Modal, Table } from "antd";
import { CreateAndUpdateFormEmployee } from "./components/CreateAndUpdateFormEmployee";
import { COLUMNS } from "./helpers/columns";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect, useState } from "react";
import { getEmployeesByIdUser } from "@/store/employeeSlice/actions";

export const Employees = () => {
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState(false);

  const { employees } = useAppSelector((state) => state.employee);

  useEffect(() => {
    if (employees.length === 0) {
      dispatch(getEmployeesByIdUser());
    }
  }, []);

  return (
    <Card
      title="Crear Empleado"
      extra={
        <Button type="primary" shape="round" onClick={() => setOpenModal(true)}>
          Crear Empleado
        </Button>
      }
    >
      <Table dataSource={employees} columns={COLUMNS} rowKey="_id" />
      <Modal
        footer={null}
        title="Crear Empleado"
        open={openModal}
        onCancel={() => setOpenModal(false)}
      >
        <CreateAndUpdateFormEmployee onSubmit={() => setOpenModal(false)} />
      </Modal>
    </Card>
  );
};
