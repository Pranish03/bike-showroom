import { Navigate, Outlet } from "react-router-dom";
import { Loading } from "./Loading";
import { NotAvailable } from "./NotAvailable";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoutes = ({ requireAdmin = false }) => {
  const { isLoading, isAuthenticated, isAdmin } = useAuth();

  if (isLoading) return <Loading />;
  if (!isAuthenticated) return <Navigate to="/login" />;
  if (requireAdmin && !isAdmin) return <NotAvailable />;

  return <Outlet />;
};
