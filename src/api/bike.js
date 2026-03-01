import { axios } from "../lib/axios";

export const fetchAllBikes = async () => {
  const res = await axios.get("/bike");
  return res.data;
};

export const fetchBike = async (id) => {
  const res = await axios.get(`/bike/${id}`);
  return res.data;
};

export const createBike = async (data) => {
  const res = await axios.post("/bike", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};
