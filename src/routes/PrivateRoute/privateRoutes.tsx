import {
  AccountPage,
  MenuCategories,
  TablePage,
  BusinessHoursPage,
  CreateAndUpdateProductPage,
  Employees,
  Products,
} from "@/pages";
import { PrivateRoutes } from "@/types/routes";

const menuRoutes: PrivateRoutes = [
  {
    path: "/menu-categories",
    name: "Categorías",
    component: <MenuCategories />,
    permissions: ["admin", "category"],
  },
  {
    path: "/products",
    name: "Productos",
    permissions: ["admin", "products"],
    component: <Products />,
  },
];
const configurationRoutes: PrivateRoutes = [
  {
    path: "/business-hours",
    name: "Horario comercial",
    component: <BusinessHoursPage />,
    permissions: ["admin"],
  },
];

export const privateRoutes: PrivateRoutes = [
  {
    path: "/account",
    name: "Cuenta",
    component: <AccountPage />,
  },
  {
    name: "Menú",
    items: menuRoutes,
    permissions: ["admin", "category", "products"],
  },
  {
    path: "/employees",
    name: "Empleados",
    component: <Employees />,
    permissions: ["admin"],
  },
  {
    path: "/products/new/*",
    name: "Crear Producto",
    component: <CreateAndUpdateProductPage />,
    hidden: true,
    permissions: ["admin"],
  },
  // {
  //   path: "/edit-product/:idMenuProduct",
  //   name: "Editar Producto",
  //   component: <CreateAndUpdateProductPage />,
  //   hidden: true,
  //   permissions: ["admin"],
  // },
  {
    path: "/tables",
    name: "Mesas",
    component: <TablePage />,
    permissions: ["admin"],
  },
  {
    name: "Configuración",
    items: configurationRoutes,
    permissions: ["admin"],
  },
];
