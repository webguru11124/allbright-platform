import PrivateProfileForm from "@/forms/PrivateProfileForm";
import { CM, H3, H5 } from "@/components/Typography";
import colours from "@/theme";
import { OnboadingPageLayout } from "@/features/Onboarding/layout";

const PrivateProfile = () => {
  return (
    <OnboadingPageLayout>
      <H3>Section 1: Private Profile</H3>
      <H5 color={colours.teal}>Step 2 of 3</H5>
      <CM>
        This information will never be shown to anyone except AllBright. We will
        use it to tailor your experience on the platform.
      </CM>
      <PrivateProfileForm />
    </OnboadingPageLayout>
  );
};

export default PrivateProfile;
