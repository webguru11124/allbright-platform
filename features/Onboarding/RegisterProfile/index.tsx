import { CM, H3, H5 } from "@/components/Typography";
import { OnboadingPageLayout } from "@/features/Onboarding/OnboardingLayout";
import RegisterProfileForm from "@/forms/RegisterProfileForm";
import withTheme from "@/hocs/withTheme";

type Props = {
  theme: Theme;
};

const RegisterProfile = ({ theme }: Props) => {
  return (
    <OnboadingPageLayout>
      <H3>Section 1: Register Profile</H3>
      <H5 style={{ color: theme.colors.txt.subtitle }}>Step 1 of 4</H5>
      <CM>
        This information will be publicly visible on your AllBright profile. Try to provide information that will help
        the right people connect with you on the platform.
      </CM>
      <RegisterProfileForm />
    </OnboadingPageLayout>
  );
};

export default withTheme(RegisterProfile);
