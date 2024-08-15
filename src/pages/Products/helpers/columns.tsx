import { formatToColombianPesos } from "@/helpers/formatNumbers";
import { ActionsTableProduct } from "../components/ActionsTableProduct";

export const COLUMNS_PRODUCTS = [
  {
    title: "Nombre",
    dataIndex: "name",
  },
  {
    title: "Descripcion",
    dataIndex: "description",
  },
  {
    title: "Precio ",
    dataIndex: "price",
    render: (price) => formatToColombianPesos(price),
  },

  {
    title: "Acciones",
    render: (product) => <ActionsTableProduct product={product} />,
  },
];
