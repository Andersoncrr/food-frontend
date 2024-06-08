import { ReactNode } from "react";

type PrivateRoute = {
  path?: string;
  name: string;
  component?: ReactNode;
  permissions?: Array<"admin" | "category" | "products">;
  items?: PrivateRoutes;
  hidden?: Boolean;
};

export type PrivateRoutes = Array<PrivateRoute>;
