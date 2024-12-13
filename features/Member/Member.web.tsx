import React, { useContext } from "react";

import { MediaQueryContext } from "@/contexts/MediaQueryContext";
import { BioField } from "@/features/Member/types";
import withTheme from "@/hocs/withTheme";
import { BREAKPOINT_TABLET } from "@/hooks/useMediaQuery";

import MemberDesktop from "./Member_Desktop";
import MemberMobile from "./Member_Mobile";

type Props = {
  lightBackground: string;
  id?: string;
  name?: string;
  imageSrc?: string | undefined | null;
  firstName?: string;
  lastName?: string;
  occupation: string;
  location: string;
  bioFields: BioField[];
  theme: Theme;
};

const Member = ({
  lightBackground,
  id,
  name,
  theme,
  imageSrc,
  firstName,
  lastName,
  occupation,
  location,
  bioFields,
}: Props) => {
  const { maxWidth, currentWidth } = useContext<MediaQuery>(MediaQueryContext);

  const showCompactDisplay = React.useMemo(
    () => (Boolean(currentWidth) ? maxWidth(BREAKPOINT_TABLET) : false),
    [maxWidth, currentWidth]
  );

  return showCompactDisplay ? (
    <MemberMobile
      lightBackground={lightBackground}
      id={id}
      name={name}
      firstName={firstName}
      lastName={lastName}
      imageSrc={imageSrc}
      occupation={occupation}
      location={location}
      bioFields={bioFields}
      theme={theme}
    />
  ) : (
    <MemberDesktop
      lightBackground={lightBackground}
      id={id}
      name={name}
      firstName={firstName}
      lastName={lastName}
      imageSrc={imageSrc}
      occupation={occupation}
      location={location}
      bioFields={bioFields}
      theme={theme}
    />
  );
};

export default withTheme(Member);
