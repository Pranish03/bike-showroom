import { Navigate, Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchMe } from "../api/auth";
import { Loading } from "./Loading";
import { NotAvailable } from "./NotAvailable";

export const ProtectedRoutes = ({ isAdmin = false }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["me"],
    queryFn: fetchMe,
  });

  console.log(data);

  if (isLoading) return <Loading />;
  if (error) return <Navigate to="/login" />;
  if (isAdmin && !data?.data?.isAdmin) return <NotAvailable />;

  return <Outlet />;
};
