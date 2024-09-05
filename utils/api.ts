import axios from "axios";

import config from "@/config";

const headers = {
  "Content-Type": "application/json",
  "x-api-key": config.API_KEY,
};

const api = axios.create({
  baseURL: config.API_URL,
  headers,
  timeout: 200000,
});

// api.interceptors.request.use(
//   async (config) => {
//     const token = await getFromStorage(ASYNC_STORAGE.authToken);
//     if (token !== null) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

api.interceptors.response.use(
  (resp) => Promise.resolve(resp.data),
  (error) => Promise.reject(error.response),
);

export default api;
