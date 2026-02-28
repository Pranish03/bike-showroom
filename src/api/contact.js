import { axios } from "../lib/axios";

export const submitContactForm = async (data) => {
  const res = await axios.post("/contact", data);
  return res.data;
};
