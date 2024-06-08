import { useAppDispatch, useAppSelector } from "@/hooks";
import { getTablesByIdUser } from "@/store/TableSlice/actions/getTablesByIdUser";
import { Button, Flex, Typography } from "antd";
import { useEffect, useState } from "react";
import Modal from "antd/es/modal/Modal";
import { CardTable } from "./components/CardTable";
import { CreateAndUpdateFormTable } from "./components/CreateAndUpdateFormTable";

import { updateTableById } from "@/store/TableSlice/actions";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
} from "reactflow";

import "reactflow/dist/style.css";

const { Title } = Typography;

const nodeTypes = {
  cardTable: CardTable,
};

export const TablePage = () => {
  const dispatch = useAppDispatch();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [openModal, setOpenModal] = useState(false);
  const { tables } = useAppSelector((state) => state.table);

  useEffect(() => {
    if (tables.length === 0) {
      dispatch(getTablesByIdUser());
    }
  }, []);
  useEffect(() => {
    if (tables) {
      const newNodes = tables.map((table) => ({
        id: table._id,
        type: "cardTable",
        draggable: true,
        selectable: true,
        data: {
          table,
        },
        position: { x: table.x, y: table.y },
      }));
      setNodes(newNodes);
    }
  }, [tables]);
  useEffect(() => {
    const attributionElement = document.querySelector(
      ".react-flow__attribution"
    );
    if (attributionElement) {
      attributionElement.remove();
    }
  }, []);

  return (
    <>
      <Flex justify="space-between" align="center">
        <Title level={2}>Mesas</Title>
        <Button type="primary" shape="round" onClick={() => setOpenModal(true)}>
          Agregar Mesa
        </Button>
      </Flex>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        fitView
        attributionPosition="top-right"
        nodeTypes={nodeTypes}
        onNodeDragStop={(_e, node) =>
          dispatch(
            updateTableById({
              idTable: node.id,
              x: node.position.x,
              y: node.position.y,
            })
          )
        }
      >
        <MiniMap zoomable pannable />
        <Controls />
        <Background />
      </ReactFlow>
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
