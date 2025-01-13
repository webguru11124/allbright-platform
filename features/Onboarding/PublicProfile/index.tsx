import { CM, H3, H5 } from "@/components/Typography";
import { OnboadingPageLayout } from "@/features/Onboarding/OnboardingLayout";
import PublicProfileForm from "@/forms/PublicProfileForm";
import withTheme from "@/hocs/withTheme";

type Props = {
  theme: Theme;
};

const PublicProfile = ({ theme }: Props) => {
  return (
    <OnboadingPageLayout>
      <H3 style={{ color: theme.colors.txt.dark }}>Section 1: Public Profile</H3>
      <H5 style={{ color: theme.colors.txt.subtitle }}>Step 2 of 4</H5>
      <CM style={{ color: theme.colors.txt.dark }}>
        This information will be publicly visible on your AllBright profile. Try to provide information that will help
        the right people connect with you on the platform.
      </CM>
      <PublicProfileForm />
    </OnboadingPageLayout>
  );
};

export default withTheme(PublicProfile);
