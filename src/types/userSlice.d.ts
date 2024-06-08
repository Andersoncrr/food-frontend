export type UserInfo = {
  _id: string;
  name: string;
  lastName?: string;
  email: string;
  permissions: Array<"admin" | "products" | "category">;
};

export type InitialState = {
  loading: boolean;
  token: string | null;
  userInfo: UserInfo;
};
