import { useQuery } from "@tanstack/react-query";
import { fetchBike } from "../api/bike";

export const useBike = (id) => {
  return useQuery({
    queryKey: ["bike", id],
    queryFn: () => fetchBike(id),
    enabled: !!id,
  });
};
