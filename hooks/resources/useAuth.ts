import { useMutation } from "@tanstack/react-query";

import { RegisterOutput } from "@/forms/adaptors";
import api from "@/lib/api";

const SIGNIN_URL = "/v1/auth/signin";
const REGISTER_URL = "/v1/auth/register/allbright_free";

export type Login = {
  email: string;
  password: string;
};

export type Register = RegisterOutput;

const signinFn = async (loginData: Login) => {
  try {
    return await api.post(SIGNIN_URL, loginData);
  } catch (error: any) {
    throw HandledError(error?.data?.statusCode);
  }
};

export const useSignIn = () =>
  useMutation({
    mutationKey: ["register"],
    mutationFn: signinFn,
  });

const registerFn = (registrationData: Register) =>
  api.post(REGISTER_URL, registrationData);

export const useRegister = () =>
  useMutation({
    mutationKey: ["login"],
    mutationFn: registerFn,
  });

const HandledError = (statusCode: number) => {
  let result: Partial<ClientError>;
  switch (statusCode) {
    case 401:
    default:
      result = {
        type: "danger",
        message: "Login failed: Please check your username and password",
      };
  }

  return result;
};
