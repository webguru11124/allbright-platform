import { CM, H3, H5 } from "@/components/Typography";
import { OnboadingPageLayout } from "@/features/Onboarding/OnboardingLayout";
import ProfileGoalsForm from "@/forms/ProfileGoalsForm";
import withTheme from "@/hocs/withTheme";

type Props = {
  theme: Theme;
};

const ProfileGoals = ({ theme }: Props) => {
  return (
    <OnboadingPageLayout>
      <H3>Section 3: Your Career Goals</H3>
      <H5 style={{ color: theme.colors.txt.subtitle }}>Step 4 of 4</H5>
      <CM>
        This information will never be shown to anyone except AllBright. We will use it to tailor your experience on the
        platform.
      </CM>
      <ProfileGoalsForm />
    </OnboadingPageLayout>
  );
};

export default withTheme(ProfileGoals);
