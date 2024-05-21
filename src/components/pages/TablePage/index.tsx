import { useAppDispatch, useAppSelector } from "@/hooks";
import { getTablesByIdUser } from "@/store/TableSlice/actions/getTablesByIdUser";
import { Button, Flex, Typography } from "antd";
import { useEffect, useState } from "react";
import { StyledFlexContainer } from "./styles/tablePageStyles";
import Modal from "antd/es/modal/Modal";

import { CardTable } from "./components/CardTable";
import { CreateAndUpdateFormTable } from "./components/CreateAndUpdateFormTable";
import { Rnd } from "react-rnd";

const { Title } = Typography;

export const TablePage = () => {
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState(false);

  const { tables } = useAppSelector((state) => state.table);

  useEffect(() => {
    dispatch(getTablesByIdUser());
  }, []);

  return (
    <>
      <Flex justify="space-between" align="center">
        <Title level={2}>Mesas</Title>
        <Button type="primary" shape="round" onClick={() => setOpenModal(true)}>
          Agregar Mesa
        </Button>
      </Flex>
      <StyledFlexContainer wrap="wrap" gap="20px">
        {tables.map((table, i) => (
          <Rnd>
            <CardTable key={i} table={table} />
          </Rnd>
        ))}
      </StyledFlexContainer>
      <Modal
        footer={null}
        title="Crear Mesa"
        open={openModal}
        onCancel={() => setOpenModal(false)}
      >
        <CreateAndUpdateFormTable onSubmit={() => setOpenModal(false)} />
      </Modal>
    </>
  );
};
