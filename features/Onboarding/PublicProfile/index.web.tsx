import styled from "styled-components/native";

import PublicProfileForm from "@/forms/PublicProfileForm";
import { OnboadingPageLayout } from "../layout";
import { CM, H3, H5 } from "@/components/Typography";
import colours from "@/utils/ui/colours";

const PublicProfile = () => {
  return (
    <OnboadingPageLayout>
      <H3>Section 1: Public Profile</H3>
      <H5Teal>Step 1 of 3</H5Teal>
      <CM>
        This information will be publicly visible on your AllBright profile. Try
        to provide information that will help the right people connect with you
        on the platform.
      </CM>
      <PublicProfileForm />
    </OnboadingPageLayout>
  );
};

const H5Teal = styled(H5)`
  color: ${colours.teal};
`;

export default PublicProfile;
