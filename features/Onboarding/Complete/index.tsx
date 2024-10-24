import React, { FunctionComponent } from "react";

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

export default Welcome;
