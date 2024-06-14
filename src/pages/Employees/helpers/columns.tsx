import { ActionsTableEmployee } from "../components/ActionsTableEmployee";

export const COLUMNS = [
  {
    title: "Nombre",
    dataIndex: "name",
  },
  {
    title: "Posición",
    dataIndex: "position",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Teléfono",
    dataIndex: "phone",
  },
  {
    title: "Acciones",
    render: (employee) => <ActionsTableEmployee employee={employee} />,
  },
];
