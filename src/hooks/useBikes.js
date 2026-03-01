import { useQuery } from "@tanstack/react-query";
import { fetchAllBikes } from "../api/bike";

export const useBikes = () => {
  return useQuery({
    queryKey: ["bikes"],
    queryFn: fetchAllBikes,
  });
};
