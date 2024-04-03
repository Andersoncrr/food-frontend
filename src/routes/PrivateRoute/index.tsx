import { AccountPage } from "@/components/pages";
import { useAppSelector } from "@/hooks";
import { Navigate, Route, Routes } from "react-router-dom";

export const PrivateRoute = () => {
  const { token } = useAppSelector((state) => state.user);

  if (!token) {
    return <Navigate to="/" />;
  }

  return (
    <Routes>
      <Route path="/account" element={<AccountPage />} />
    </Routes>
  );
};
