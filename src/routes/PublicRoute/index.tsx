import { AuthPage, CreateAccountPage } from "@/components/pages";
import { useAppSelector } from "@/hooks";
import { Navigate, Route, Routes } from "react-router-dom";

export const PublicRoutes = () => {
  const { token } = useAppSelector((state) => state.user);

  if (token) {
    return <Navigate to="/administrator/account" />;
  }

  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/create-account" element={<CreateAccountPage />} />
      <Route path="/*" element={<Navigate to="/auth" />} />
    </Routes>
  );
};
