import { CM, H3, H5 } from "@/components/Typography";
import { OnboadingPageLayout } from "@/features/Onboarding/OnboardingLayout";
import PublicProfileForm from "@/forms/PublicProfileForm";
import colours from "@/theme";

const PublicProfile = () => {
  return (
    <OnboadingPageLayout>
      <H3>Section 1: Public Profile</H3>
      <H5 color={colours.teal}>Step 2 of 4</H5>
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
