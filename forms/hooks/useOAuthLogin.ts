import { router } from "expo-router";
import { useCallback, useEffect, useState } from "react";

import { useUserContext } from "@/contexts/UserContext";
import { useGoogleSignIn } from "@/hooks/resources/useAuth";
import { useUserUpdate } from "@/hooks/resources/useUserUpdate";
import { UserModel } from "@/types/user";

import { useShowToast } from "./useShowToast";

const useOAuthLogin = (isSignup?: boolean) => {
  const [userProfile, setUserProfile] = useState<UserModel | undefined>(undefined);
  const { mutateAsync: googleSignIn } = useGoogleSignIn(isSignup);
  const { showErrorMessage } = useShowToast();
  const { mutateAsync: updateUser } = useUserUpdate(userProfile?.id);
  const { refetch } = useUserContext();

  const updateUserAndNavigate = useCallback(async () => {
    await updateUser({ ...userProfile });
    if (isSignup) {
      router.replace("/onboarding/welcome");
    } else {
      router.replace("/home");
    }
    refetch();
  }, [isSignup, refetch, updateUser, userProfile]);

  useEffect(() => {
    if (userProfile) {
      updateUserAndNavigate();
    }
  }, [updateUserAndNavigate, userProfile]);

  const googleLogin = async (idToken: string) => {
    if (!idToken) throw new Error("idToken is required");
    try {
      const response = await googleSignIn(idToken);
      if (response.data.success) {
        if (response.data.profile) {
          setUserProfile(response.data.profile);
        }
      }
    } catch (error: any) {
      showErrorMessage("Error", error.message);
    }
  };

  const facebookLogin = async (token: string) => {};

  const linkedinLogin = () => {};
  return {
    googleLogin: googleLogin,
    facebookLogin,
    linkedinLogin,
  };
};

export default useOAuthLogin;
