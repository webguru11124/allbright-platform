import { Image } from "expo-image";
import React from "react";
import styled from "styled-components/native";

import { IconCamera } from "@/components/Icons";
import colors from "@/theme";

interface StyleProps {
  height?: string;
  width?: string;
}
interface ProfilePhotoInputProps {
  imageSrc?: string | null;
  height?: string;
  width?: string;
  pickProfileImage: () => void;
}

const ProfilePhotoInput: React.FunctionComponent<ProfilePhotoInputProps> = (props) => {
  const ImageDisplay = React.useMemo(() => {
    if (props.imageSrc)
      return (
        <Image
          style={{ height: "100%", width: "100%", flex: 1 }}
          accessibilityLabel="profile-photo"
          source={props.imageSrc}
          contentFit="cover"
        />
      );

    return <S.CameraIcon testID="camera-icon" />;
  }, [props.imageSrc]);

  return (
    <S.DisplayPhotoSection onPress={props.pickProfileImage}>
      <S.DisplayPhoto
        height={props.height}
        width={props.width}>
        {ImageDisplay}
      </S.DisplayPhoto>
    </S.DisplayPhotoSection>
  );
};

const S = () => { };

S.DisplayPhotoSection = styled.Pressable`
  justify-content: center;
  align-items: center;
`;

S.DisplayPhoto = styled.View<StyleProps>`
  background-color: ${colors.shellOverlay};
  border-radius: 100px;
  cursor: pointer;
  height: ${(p) => (p.height ? p.height : "200px")};
  width: ${(p) => (p.width ? p.width : "200px")};
  overflow: hidden;
  justify-content: center;
  align-items: center;
  position: relative;
`;

S.CameraIcon = styled(IconCamera)`
  filter: contrast(0) brightness(1.4);
  transform: scale(1.6);
`;

export default ProfilePhotoInput;
