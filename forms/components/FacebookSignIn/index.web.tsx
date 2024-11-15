import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import React from "react";

import config from "@/config";

import FacebookSignIn from "./FacebookSignin";

WebBrowser.maybeCompleteAuthSession();

const CLIENT_ID = config.FACEBOOK_APP_ID!;
const REDIRECT_URI = AuthSession.makeRedirectUri({
  scheme: "allbright-platform",
});
const DISCOVERY = {
  authorizationEndpoint: "https://www.facebook.com/v12.0/dialog/oauth",
  tokenEndpoint: "https://graph.facebook.com/v12.0/oauth/access_token",
};
interface Props {
  handleToken: (token: string) => Promise<void>;
  isSignin: boolean;
}
const FacebookSignInContainer = (props: Props) => {
  const [, , promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: CLIENT_ID,
      redirectUri: REDIRECT_URI,
      scopes: ["public_profile", "email"],
      responseType: "token",
      usePKCE: false,
    },
    DISCOVERY
  );
  const [loading, setLoading] = React.useState(false);

  const handlePress = async () => {
    const response = await promptAsync();
    if (response?.type === "success") {
      const { access_token } = response.params;
      // Handle the access token, e.g., send it to your backend for verification
      setLoading(true);
      props.handleToken(access_token).finally(() => {
        setLoading(false);
      });
    }
  };
  return (
    <FacebookSignIn
      isSignin={props.isSignin}
      onPress={handlePress}
      loading={loading}
    />
  );
};

export default FacebookSignInContainer;
