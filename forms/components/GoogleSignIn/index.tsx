import {
  GoogleSignin,
  statusCodes,
  isErrorWithCode,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

interface Props {
  handleToken: (token: string) => void;
}

const GoogleSignIn = (props: Props) => {
  const [isInProgress, setIsInProgress] = useState(false);

  const handleSignIn = async () => {
    setIsInProgress(true);
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      console.log(isErrorWithCode(error));
      console.error(error);
    } finally {
      setIsInProgress(false);
    }
  };

  return (
    <View style={styles.container}>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={handleSignIn}
        disabled={isInProgress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GoogleSignIn;
