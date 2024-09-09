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

const signinFn = async (loginData: Login) =>
  await api.post(SIGNIN_URL, loginData);

export const useSignIn = () => {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: signinFn,
  });
};

const registerFn = (registrationData: Register) => {
  return api.post(REGISTER_URL, registrationData);
};

export const useRegister = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: registerFn,
  });
};
