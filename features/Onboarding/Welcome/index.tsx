import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

import { CM, H2Rox } from "@/components/Typography";
import { OnboadingPageLayout } from "@/features/Onboarding/OnboardingLayout";
import Button from "@/forms/components/Button";

export default function WelcomeScreen() {
  const returningUser = false;
  const router = useRouter();

  const onPress = () => {
    router.push("/onboarding/register-profile");
  };

  return (
    <OnboadingPageLayout>
      <View style={styles.main}>
        <View style={styles.imageWrapper}>
          <Image
            style={[StyleSheet.absoluteFill, styles.image]}
            source={require("@/assets/images/digital-screens.jpg")}
            contentFit="cover"
          />
        </View>
        <View style={styles.section}>
          <H2Rox>{returningUser ? "A bespoke experience" : "Welcome to AllBright"}</H2Rox>
          <CM style={[styles.cmBold]}>
            {returningUser
              ? "AllBright is personalising your experience, for better suggestions of events, courses and connections. We invite you to check your profile is up to date."
              : "Let's get started on personalising your experience."}
          </CM>
          <CM>
            <CM style={[styles.cmBold]}>The first section will be visible on your public profile, </CM>
            giving others a chance to get to know you better.
          </CM>
          <CM>
            Meanwhile, the following sections{" "}
            <CM style={[styles.cmBold]}>
              will remain private. This information will never be shared with anyone else.
            </CM>
            &nbsp;AllBright will use it to tailor your experience on the platform.
          </CM>
        </View>

        <Button onPress={onPress}>Start</Button>
      </View>
    </OnboadingPageLayout>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "flex-start",
  },
  imageWrapper: {
    width: "100%",
    aspectRatio: 2 / 1,
  },
  image: {},
  section: {
    gap: 15,
    paddingVertical: 15,
  },
  cmBold: {
    fontWeight: 700,
  },
});
