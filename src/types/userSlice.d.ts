export type UserInfo = {
  _id: string;
  name: string;
  email: string;
  permissions: Array<"admin">;
};

export type InitialState = {
  loading: boolean;
  token: string | null;
  userInfo: UserInfo;
};
