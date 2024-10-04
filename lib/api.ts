import axios from "axios";

import config from "@/config";
import { Platform } from "react-native";

const headers = {
  "Content-Type": "application/json",
  "x-api-key": config.API_KEY,
};

const resolveApiUrl = () =>
  config.ENV === "development" && Platform.OS === "android"
    ? "http://10.0.2.2:4000"
    : config.API_URL;

const api = axios.create({
  baseURL: resolveApiUrl(),
  headers,
  timeout: 200000,
});

export default api;
