import {
  GoogleSignin,
  isErrorWithCode,
} from "@react-native-google-signin/google-signin";
import React, { useState } from "react";

import config from "@/config";

import GoogleSignIn from "./GoogleSignin";

interface Props {
  handleToken: (token: string) => void;
  isSignin: boolean;
}
GoogleSignin.configure({
  offlineAccess: true,
  webClientId: config.GOOGLE_CLIENT_ID,
});
const GoogleSignInContainer = (props: Props) => {
  const [isInProgress, setIsInProgress] = useState(false);

  const handleSignIn = async () => {
    setIsInProgress(true);
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn();
      const accessToken = (await GoogleSignin.getTokens()).accessToken;

      if (accessToken) props.handleToken(accessToken);
      else throw new Error("accessToken not found");
    } catch (error) {
      if (isErrorWithCode(error)) {
        throw new Error(error.code);
      }
    } finally {
      setIsInProgress(false);
    }
  };

  return (
    <GoogleSignIn
      isSignin={props.isSignin}
      onPress={handleSignIn}
      loading={isInProgress}
    />
  );
};

export default GoogleSignInContainer;
