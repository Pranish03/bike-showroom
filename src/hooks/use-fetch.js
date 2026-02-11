import { useCallback, useEffect, useState } from "react";
import { axios } from "../lib/axios";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fn = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await axios.get(url);
      setData(data.data);
    } catch (error) {
      setError(error.message);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fn();
  }, [fn]);

  return { data, refetch: fn, isLoading, error };
};
