import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import React from "react";

import config from "@/config";

import GoogleSignIn from "./GoogleSignin";

WebBrowser.maybeCompleteAuthSession();

const CLIENT_ID = config.GOOGLE_CLIENT_ID!;
const REDIRECT_URI = AuthSession.makeRedirectUri({
  scheme: "allbright-platform",
});
const DISCOVERY = {
  authorizationEndpoint: "https://accounts.google.com/o/oauth2/auth",
  tokenEndpoint: "https://oauth2.googleapis.com/token",
};
interface Props {
  handleToken: (token: string) => Promise<void>;
  isSignin: boolean;
}
const GoogleSignInContainer = (props: Props) => {
  const [, , promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: CLIENT_ID,
      redirectUri: REDIRECT_URI,
      scopes: ["openid", "profile", "email"],
      responseType: "token",
      usePKCE: false,
      prompt: "consent" as any, // Always prompt the user to consent
    },
    DISCOVERY
  );
  const [loading, setLoading] = React.useState(false);

  const handlePress = async () => {
    const response = await promptAsync();
    if (response?.type === "success") {
      const { access_token } = response.params;
      // Handle the ID token, e.g., send it to your backend for verification
      setLoading(true);
      props.handleToken(access_token).finally(() => {
        setLoading(false);
      });
    }
  };
  return (
    <GoogleSignIn
      isSignin={props.isSignin}
      onPress={handlePress}
      loading={loading}
    />
  );
};

export default GoogleSignInContainer;
