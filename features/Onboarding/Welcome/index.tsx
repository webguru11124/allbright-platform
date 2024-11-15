import styled from "styled-components/native";

import Link from "@/components/Link";
import { CM, H2Rox } from "@/components/Typography";
import { OnboadingPageLayout } from "@/features/Onboarding/OnboardingLayout";
import { recommendationColour } from "@/theme";

export default function WelcomeScreen() {
  const returningUser = false;
  return (
    <OnboadingPageLayout>
      <Main>
        <ImageWrapper>
          <StyledImage
            source={require("@/assets/images/digital-screens.jpg")}
            resizeMode="cover"
          />
        </ImageWrapper>
        <Section>
          <H2Rox>
            {returningUser ? "A bespoke experience" : "Welcome to AllBright"}
          </H2Rox>
          <CMBold>
            {returningUser
              ? "AllBright is personalising your experience, for better suggestions of events, courses and connections. We invite you to check your profile is up to date."
              : "Let's get started on personalising your experience."}
          </CMBold>
          <CM>
            <CMBold>
              The first section will be visible on your public profile,{" "}
            </CMBold>
            giving others a chance to get to know you better.
          </CM>
          <CM>
            Meanwhile, the following sections{" "}
            <CMBold>
              will remain private. This information will never be shared with
              anyone else.
            </CMBold>
            &nbsp;AllBright will use it to tailor your experience on the
            platform.
          </CM>
        </Section>

        <Link
          href="/onboarding/register-profile"
          background={recommendationColour.btBgColor}
          isSecondary={true}>
          <CM color={recommendationColour.btColor}>Start</CM>
        </Link>
      </Main>
    </OnboadingPageLayout>
  );
}
const CMBold = styled(CM)`
  font-weight: 700;
`;

const Main = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;
const ImageWrapper = styled.View`
  position: relative;
  width: 100%;
  aspect-ratio: 2/1;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Section = styled.View`
  flex-direction: column;
  gap: 15px;
  padding: 10px 0;
`;
