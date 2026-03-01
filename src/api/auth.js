import { axios } from "../lib/axios";

export const login = async (data) => {
  const res = await axios.post("/auth/login", data);
  return res?.data;
};

export const signup = async (data) => {
  const res = await axios.post("/auth/signup", data);
  return res?.data;
};

export const fetchMe = async () => {
  const res = await axios.get("/auth/me");
  return res?.data;
};
