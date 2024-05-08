import { AccountPage, MenuCategories } from "@/components/pages";
import { CreateAndUpdateProductPage } from "@/components/pages/CreateAndUpdateProductPage";
import { Employees } from "@/components/pages/Employees";
import { Products } from "@/components/pages/Products";

import { PrivateRoutes } from "@/types/routes";

const menuRoutes: PrivateRoutes = [
  {
    path: "/menu-categories",
    name: "Categorías",
    component: <MenuCategories />,
    permissions: ["admin"],
  },
  {
    path: "/products",
    name: "Productos",
    permissions: ["admin"],
    component: <Products />,
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
];
