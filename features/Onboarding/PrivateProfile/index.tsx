import styled from "styled-components/native";

import PrivateProfileForm from "@/forms/PrivateProfileForm";
import { OnboadingPageLayout } from "../layout";
import { CM, H3, H5 } from "@/components/Typography";
import colours from "@/utils/ui/colours";

const PrivateProfile = () => {
  return (
    <OnboadingPageLayout>
      <H3>Section 1: Private Profile</H3>
      <H5Teal>Step 2 of 3</H5Teal>
      <CM>
        This information will never be shown to anyone except AllBright. We will
        use it to tailor your experience on the platform.
      </CM>
      <PrivateProfileForm />
    </OnboadingPageLayout>
  );
};

const H5Teal = styled(H5)`
  color: ${colours.teal};
`;

export default PrivateProfile;
