import { AccountPage, MenuCategories } from "@/components/pages";
import { Employees } from "@/components/pages/Employees";
import { PrivateRoutes } from "@/types/routes";

const menuRoutes: PrivateRoutes = [
  {
    path: "/menu-categories",
    name: "Categorías",
    component: <MenuCategories />,
    permissions: ["admin"],
  },
];

export const privateRoutes: PrivateRoutes = [
  {
    path: "/account",
    name: "Cuenta",
    component: <AccountPage />,
    permissions: ["admin"],
  },
  {
    name: "Menú",
    items: menuRoutes,
    permissions: ["admin"],
  },
  {
    path: "/employees",
    name: "Empleados",
    component: <Employees />,
    permissions: ["admin"],
  },
  {
    path: "/kitchen-staff",
    name: "Personal de Cocina",
    component: <div>Personal de cocina </div>,
  },
];
