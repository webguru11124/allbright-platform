import { router } from "expo-router";

import { useGoogleSignIn } from "@/hooks/resources/useAuth";
import { useUserUpdate } from "@/hooks/resources/useUserUpdate";
import { setToken } from "@/utils/token";

import { useShowToast } from "./useShowToast";

const useOAuthLogin = (isSignup?: boolean) => {
  const { mutateAsync: googleSignIn } = useGoogleSignIn(isSignup);

  const { showErrorMessage } = useShowToast();
  const { mutateAsync: updateUser } = useUserUpdate();

  const googleLogin = async (idToken: string) => {
    if (!idToken) throw new Error("idToken is required");
    try {
      const response = await googleSignIn(idToken);
      if (response.data.success) {
        if (response.data.token) {
          setToken(response.data.token);
        } else {
          throw new Error("Token not found");
        }
        if (response.data.profile) {
          // TODO: need to to save profile information
          await updateUser({ ...response.data.profile });
        }
        if (isSignup) {
          router.replace("/onboarding/register-profile");
        } else {
          router.replace("/home");
        }
      }
    } catch (error: any) {
      showErrorMessage(error.message);
    }
  };

  const facebookLogin = async (token:string) => {};

  const linkedinLogin = () => {};
  return {
    googleLogin: googleLogin,
    facebookLogin,
    linkedinLogin,
  };
};

export default useOAuthLogin;
