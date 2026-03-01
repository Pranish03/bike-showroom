import { useQuery } from "@tanstack/react-query";
import { fetchMe } from "../api/auth";
import { Loading } from "./Loading";
import { Navigate, Outlet } from "react-router-dom";

export const GuestRoutes = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: fetchMe,
  });

  if (isLoading) return <Loading />;
  if (data) return <Navigate to="/" replace />;

  return <Outlet />;
};
