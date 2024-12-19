import { useMutation } from "@tanstack/react-query";
import { signInWithEmailAndPassword } from "firebase/auth";

import { RegisterOutput } from "@/forms/adaptors";
import api from "@/lib/api";
import { auth } from "@/utils/client/firebase";

const REGISTER_URL = "/v1/auth/register/allbright_free";
const GOOGLE_SIGN_IN_URL = "/v1/auth/google-signin";
const GOOGLE_SIGN_UP_URL = "/v1/auth/google-signup";

export type Login = {
  email: string;
  password: string;
};

export type Register = RegisterOutput;

const signinFn = async (loginData: Login) => {
  try {
    await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
  } catch (error: any) {
    throw HandledError(error?.data?.statusCode);
  }
};

const googleSignInFn = async (token: string) => api.post(GOOGLE_SIGN_IN_URL, { idToken: token });

const googleSignUpFn = async (token: string) => api.post(GOOGLE_SIGN_UP_URL, { idToken: token });

export const useSignIn = () =>
  useMutation({
    mutationKey: ["signin"],
    mutationFn: signinFn,
  });

export const useGoogleSignIn = (isSignup?: boolean) =>
  useMutation({
    mutationKey: ["google-signin"],
    mutationFn: isSignup ? googleSignUpFn : googleSignInFn,
  });

const registerFn = (registrationData: Register) => api.post(REGISTER_URL, registrationData);

export const useRegister = () =>
  useMutation({
    mutationKey: ["register"],
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
