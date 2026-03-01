import { Loading } from "./Loading";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const GuestRoutes = () => {
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) return <Loading />;
  if (isAuthenticated) return <Navigate to="/" replace />;

  return <Outlet />;
};
