import axios from "axios";
import { Platform } from "react-native";

import config from "@/config";
import { getIdToken } from "@/utils/client/firebase";

const headers = {
  "Content-Type": "application/json",
  "x-api-key": config.API_KEY,
};

const resolveApiUrl = () =>
  config.ENV === "development" && Platform.OS === "android" ? "http://10.0.2.2:4000" : config.API_URL;

const api = axios.create({
  baseURL: resolveApiUrl(),
  headers,
  timeout: 200000,
});

api.interceptors.request.use(
  async (config) => {
    const token = await getIdToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
