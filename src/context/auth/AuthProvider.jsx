import { useQuery } from "@tanstack/react-query";
import { fetchMe } from "../../api/auth";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["me"],
    queryFn: fetchMe,
    retry: false,
  });

  console.log(data);

  const value = {
    user: data || null,
    isLoading,
    error,
    refetch,
    isAuthenticated: !!data?.data,
    isAdmin: data?.data?.isAdmin || false,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
