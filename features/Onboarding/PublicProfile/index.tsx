import { useRouter } from "expo-router";

import { CM, H3, H5 } from "@/components/Typography";
import { OnboadingPageLayout } from "@/features/Onboarding/layout";
import PublicProfileForm from "@/forms/PublicProfileForm";
import colours from "@/theme";

const PublicProfile = () => {
  const router = useRouter();

  return (
    <OnboadingPageLayout onBackPress={() => router.back()}>
      <H3>Section 1: Public Profile</H3>
      <H5 color={colours.teal}>Step 1 of 3</H5>
      <CM>
        This information will be publicly visible on your AllBright profile. Try
        to provide information that will help the right people connect with you
        on the platform.
      </CM>
      <PublicProfileForm />
    </OnboadingPageLayout>
  );
};

export default PublicProfile;
