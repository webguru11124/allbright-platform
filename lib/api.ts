import axios from "axios";

import config from "@/config";
import { Platform } from "react-native";
import { getToken } from "@/utils/token";

const bypassUrls = [
  "/api/email.validate",
  "/api/user.subscribe-to-newsletter",
  "/api/user.contact-allbright",
  "/api/user.logout",
  "/api/nft.check-whitelist",
  "/api/contentful.get-banner-by-page",
  "/api/stripe.get-price-by-id",
  "/api/stripe.get-promotion-by-code",
  "/api/stripe.create-payment-intent",
  "/api/voucher.create",
  "/api/voucher.validate",
  "/api/user/create-alliance",
  "/v1/auth/signin",
  "/v1/auth/register/allbright_free",
];

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

api.interceptors.request.use(async (request: any) => {
  if (bypassUrls.some((url) => request?.url.startsWith(url))) return request;
  let token;
  try {
    token = await getToken();
    if (token) return token;
  } catch {
    // Sentry.captureException(err);
    return undefined;
  }
  if (!token) return request;
  request.headers.authorization = `Bearer ${token}`;
  return request;
});

export default api;
