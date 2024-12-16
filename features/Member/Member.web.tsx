import React, { useContext } from "react";

import { MediaQueryContext } from "@/contexts/MediaQueryContext";
import { MemberCardProps } from "@/features/Member/types";
import withTheme from "@/hocs/withTheme";
import { BREAKPOINT_TABLET } from "@/hooks/useMediaQuery";

import MemberDesktop from "./Member_Desktop";
import MemberMobile from "./Member_Mobile";

const Member = ({
  lightBackground,
  id,
  name,
  theme,
  imageSrc,
  initials,
  occupation,
  location,
  bioFields,
}: MemberCardProps) => {
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
      initials={initials}
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
      initials={initials}
      imageSrc={imageSrc}
      occupation={occupation}
      location={location}
      bioFields={bioFields}
      theme={theme}
    />
  );
};

export default withTheme(Member);
