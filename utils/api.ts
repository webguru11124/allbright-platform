import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  "x-api-key": process.env.EXPO_PUBLIC_API_KEY,
};

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
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
