import { MoreOutlined } from "@ant-design/icons";
import { Card, Dropdown, Image, Modal, Tooltip } from "antd";
import tableIcon from "@/assets/icons/table.png";
import { CreateAndUpdateFormTable } from "../CreateAndUpdateFormTable";
import { useState } from "react";
import { useAppDispatch } from "@/hooks";
import { deleteTableById } from "@/store/TableSlice/actions";

export const CardTable = ({ table }) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Card
        title={<Tooltip title="Mesas">N°:{table.number}</Tooltip>}
        extra={
          <Dropdown
            menu={{
              items: [
                {
                  key: "1",
                  label: "Editar",
                  onClick: () => setOpenModal(true),
                },
                {
                  key: "2",
                  label: "Eliminar",
                  onClick: () => dispatch(deleteTableById(table._id)),
                },
              ],
            }}
          >
            <MoreOutlined />
          </Dropdown>
        }
      >
        <Image preview={false} width={100} src={tableIcon} />
        <Tooltip title="Sillas">
          <p>Sillas:{table.capacity}</p>
        </Tooltip>
      </Card>
      <Modal
        footer={null}
        title="Editar Mesa"
        open={openModal}
        onCancel={() => setOpenModal(false)}
      >
        <CreateAndUpdateFormTable
          onSubmit={() => setOpenModal(false)}
          table={table}
        />
      </Modal>
    </div>
  );
};
