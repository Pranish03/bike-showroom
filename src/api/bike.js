import { axios } from "../lib/axios";

export const fetchAllBikes = async () => {
  const res = await axios.get("/bike");
  return res.data;
};

export const fetchBike = async (id) => {
  const res = await axios.get(`/bike/${id}`);
  return res.data;
};
