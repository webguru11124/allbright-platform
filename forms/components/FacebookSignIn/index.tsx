
import React from "react";

import FacebookSignIn from "./FacebookSignin";
import { AccessToken, LoginManager } from "react-native-fbsdk-next";


interface Props {
  handleToken: (token: string) => Promise<void>;
  isSignin: boolean;
}
const FacebookSignInContainer = (props: Props) => {
  const [loading, setLoading] = React.useState(false);
  const handleFacebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      if (result.isCancelled) {
        console.log('Login cancelled');
      } else {
        const data = await AccessToken.getCurrentAccessToken();
        if (data) {
          console.log('Access Token:', data.accessToken.toString());

          setLoading(true);
          await props.handleToken(data.accessToken.toString())
          setLoading(false);
        }
      }
    } catch (error) {
      console.log('Login fail with error: ' + error);
    }
  };

  return (
    <FacebookSignIn
      isSignin={props.isSignin}
      onPress={handleFacebookLogin}
      loading={loading}
    />
  );
};

export default FacebookSignInContainer;
