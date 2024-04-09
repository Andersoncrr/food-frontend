import { ReactNode } from "react";

type PrivateRoute = {
  path: string;
  name: string;
  component: ReactNode;
  permissions?: Array<"admin">;
};

export type PrivateRoutes = Array<PrivateRoute>;
