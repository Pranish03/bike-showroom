import a from "axios";

const axios = a.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth-token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { axios };
