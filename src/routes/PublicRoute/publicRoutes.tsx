import { AuthPage, CreateAccountPage } from "@/components/pages";

import { PrivateRoutes } from "@/types/routes";

export const publicRoutes: PrivateRoutes = [
  {
    path: "/auth",
    name: "Autenticación",
    component: <AuthPage />,
  },
  {
    path: "/create-account",
    name: "Autenticación",
    component: <CreateAccountPage />,
  },
];
