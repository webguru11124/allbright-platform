import { useMutation } from "@tanstack/react-query";

import api from "@/utils/api";

const SIGNIN_URL = "/v1/auth/signin";

export type Login = {
  email: string;
  password: string;
};

const signinFn = async (loginData: Login) => {
  const response = await api.post(SIGNIN_URL, loginData);
  return response;
};

export const useSignIn = () => {
  return useMutation({
    mutationFn: signinFn,
  });
};
