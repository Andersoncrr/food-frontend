import { AccountPage } from "@/components/pages";
import { PrivateRoutes } from "@/types/routes";

export const Personal: PrivateRoutes = [
  {
    path: "/cook",
    name: "Cocinera",
    component: <div>Cocinera </div>,
    permissions: ["admin"],
  },
  {
    path: "/aux",
    name: "Auxiliar",
    component: <div>Auxiliar </div>,

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
    path: "/administrator",
    name: "Administrador",
    component: <div>Administrador </div>,
    permissions: ["admin"],
  },
  {
    path: "/employees",
    name: "Empleados",
    component: <div>Empleados </div>,
    items: Personal,
    permissions: ["admin"],
  },
  {
    path: "/kitchen-staff",
    name: "Personal de Cocina",
    component: <div>Personal de cocina </div>,
  },
];
