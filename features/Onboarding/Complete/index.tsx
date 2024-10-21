import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { CM, H3 } from "@/components/Typography";
import { OnboadingPageLayout } from "@/features/Onboarding/layout";
import Button from "@/forms/components/Button";

const Welcome: FunctionComponent = () => {
  return (
    <OnboadingPageLayout>
      <H3>Profile complete</H3>
      <CM>
        Here is your AllBright Business Card. Please check everything looks
        right, and we’ll get you onto the platform immediately. You can change
        your details at any time through the Profile option at the top right of
        your screen.
      </CM>

      <Button>Approve</Button>
    </OnboadingPageLayout>
  );
};

const S = () => { };

S.ImageWrap = styled.View`
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
S.ContentWrap = styled.View`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px 0;
`;

export default Welcome;
