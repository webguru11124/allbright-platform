import { useMutation } from "@tanstack/react-query";

import api from "@/utils/api";
import { RegisterOutput } from "@/forms/adaptors";

const SIGNIN_URL = "/v1/auth/signin";
const REGISTER_URL = "/v1/auth/register/allbright_free";

export type Login = {
  email: string;
  password: string;
};

export type Register = RegisterOutput;

const signinFn = async (loginData: Login) => {
  const response = await api.post(SIGNIN_URL, loginData);
  return response;
};

export const useSignIn = () => {
  return useMutation({
    mutationFn: signinFn,
  });
};

const registerFn = async (registrationData: Register) => {
  const response = await api.post(REGISTER_URL, registrationData);
  return response;
};

export const useRegister = () => {
  return useMutation({
    mutationFn: registerFn,
  });
};
