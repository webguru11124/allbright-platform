import { CM, H3, H5 } from "@/components/Typography";
import { OnboadingPageLayout } from "@/features/Onboarding/OnboardingLayout";
import PrivateProfileForm from "@/forms/PrivateProfileForm";
import colors from "@/theme";

const PrivateProfile = () => {
  return (
    <OnboadingPageLayout>
      <H3>Section 1: Private Profile</H3>
      <H5 color={colors.teal}>Step 3 of 4</H5>
      <CM>
        This information will never be shown to anyone except AllBright. We will
        use it to tailor your experience on the platform.
      </CM>
      <PrivateProfileForm />
    </OnboadingPageLayout>
  );
};

export default PrivateProfile;
