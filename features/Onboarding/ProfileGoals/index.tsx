import { CM, H3, H5 } from "@/components/Typography";
import { OnboadingPageLayout } from "@/features/Onboarding/OnboardingLayout";
import ProfileGoalsForm from "@/forms/ProfileGoalsForm";
import colours from "@/theme";

const ProfileGoals = () => {
  return (
    <OnboadingPageLayout>
      <H3>Section 3: Your Career Goals</H3>
      <H5 color={colours.teal}>Step 3 of 3</H5>
      <CM>
        This information will never be shown to anyone except AllBright. We will
        use it to tailor your experience on the platform.
      </CM>
      <ProfileGoalsForm />
    </OnboadingPageLayout>
  );
};

export default ProfileGoals;
