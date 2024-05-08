import { ReactNode } from "react";

type PrivateRoute = {
  path?: string;
  name: string;
  component?: ReactNode;
  permissions?: Array<"admin">;
  items?: PrivateRoutes;
  hidden?: Boolean;
};

export type PrivateRoutes = Array<PrivateRoute>;
