import a from "axios";

const axios = a.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

export { axios };
