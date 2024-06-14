import { useAppDispatch } from "@/hooks";
import { deleteMenuProductById } from "@/store/ProductsSlice/actions/deleteMenuProductById";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { App } from "antd";
import { useNavigate } from "react-router-dom";
import { StyledContainerActions } from "../styles/actionsTableProductStyles";

export const ActionsTableProduct = ({ product }) => {
  const { modal } = App.useApp();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <StyledContainerActions>
      <EditTwoTone
        onClick={() => navigate(`/administrator/edit-product/${product._id}`)}
      />
      <DeleteTwoTone
        onClick={() =>
          modal.confirm({
            title: "Confirmar eliminación",
            content: "¿Estás seguro de que deseas eliminar este producto?",
            onOk() {
              dispatch(deleteMenuProductById(product._id));
            },
          })
        }
      />
    </StyledContainerActions>
  );
};
