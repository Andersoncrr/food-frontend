import { ActionsTableMenuCategory } from "../components/ActionsTableMenuCategory";

export const COLUMNS = [
  {
    title: "Nombre",
    dataIndex: "name",
  },
  {
    title: "Descripción",
    dataIndex: "description",
  },
  {
    title: "Acciones",
    render: (menuCategory) => (
      <ActionsTableMenuCategory menuCategory={menuCategory} />
    ),
  },
];
