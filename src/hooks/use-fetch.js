import { useEffect, useState } from "react";
import { axios } from "../lib/axios";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fn = async () => {
      try {
        setIsLoading(true);
        const data = await axios.get(url);
        setData(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fn();
  }, [url]);

  return { data, isLoading, error };
};
