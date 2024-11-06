import { useRouter } from "expo-router";

import { useGoogleSignIn } from "@/hooks/resources/useAuth";
import { setToken } from "@/utils/token";

import { useShowToast } from "./useShowToast";

export const useOAuth = () => {
  const router = useRouter();
  const { mutate: googleSignIn } = useGoogleSignIn();

  const { showErrorMessage } = useShowToast();

  const onGoogleSignIn = (token: string) => {
    console.log("call api", token);
    googleSignIn(token, {
      onSuccess: (response) => {
        setToken(response.data as unknown as string);
        router.replace("/home");
      },
      onError: (error: any) => showErrorMessage(error.message),
    });
  };

  return {
    onGoogleSignIn,
  };
};
