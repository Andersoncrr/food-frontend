import { AccountPage, MenuCategories, TablePage } from "@/components/pages";
import { BusinessHoursPage } from "@/components/pages/BusinessHoursPage";
import { CreateAndUpdateProductPage } from "@/components/pages/CreateAndUpdateProductPage";
import { Employees } from "@/components/pages/Employees";
import { Products } from "@/components/pages/Products";

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
    path: "/create-product",
    name: "Crear Producto",
    component: <CreateAndUpdateProductPage />,
    hidden: true,
    permissions: ["admin"],
  },
  {
    path: "/edit-product/:idMenuProduct",
    name: "Editar Producto",
    component: <CreateAndUpdateProductPage />,
    hidden: true,
    permissions: ["admin"],
  },
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
