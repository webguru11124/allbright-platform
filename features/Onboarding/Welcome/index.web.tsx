import styled from "styled-components/native";
import { OnboadingPageLayout } from "../layout";
import { CM, H2Rox } from "@/components/Typography";
import Link from "@/components/Link";

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
            <b>The first section will be visible on your public profile,</b>{" "}
            giving others a chance to get to know you better.
          </CM>
          <CM>
            Meanwhile, the following sections{" "}
            <b>
              will remain private. This information will never be shared with
              anyone else.
            </b>
            &nbsp;AllBright will use it to tailor your experience on the
            platform.
          </CM>
        </Section>
        <Link
          href="/onboarding/public-profile"
          background={"rgb(58, 59, 61)"}
          isSecondary={true}>
          <CM color={"rgb(228, 230, 235)"}>Start</CM>
        </Link>
      </Main>
    </OnboadingPageLayout>
  );
}
const CMBold = styled(CM)`
  font-weight: 600;
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

  @supports not (aspect-ratio: 2/1) {
    &::before {
      float: left;
      padding-top: 50%;
      content: "";
    }

    &::after {
      display: block;
      content: "";
      clear: both;
    }
  }
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
