import React from "react";
import styled from "styled-components/native";

import colours from "@/utils/ui/colours";
import { Image } from "react-native";
import { IconCamera } from "@/components/Icons";

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

const ProfilePhotoInput: React.FunctionComponent<ProfilePhotoInputProps> = (
  props
) => {
  const getImageDisplay = () => {
    if (props.imageSrc)
      return (
        <S.StyledImage
          testID="profile-photo"
          source={{ uri: props.imageSrc }}
        />
      );

    return <S.CameraIcon testID="camera-icon" />;
  };

  return (
    <S.DisplayPhotoSection onPress={props.pickProfileImage}>
      <S.DisplayPhoto
        height={props.height}
        width={props.width}>
        {getImageDisplay()}
      </S.DisplayPhoto>
    </S.DisplayPhotoSection>
  );
};

const S = () => {};

S.StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
S.DisplayPhotoSection = styled.Pressable`
  justify-content: center;
  align-items: center;
`;

S.DisplayPhoto = styled.View<StyleProps>`
  background-color: ${colours.shellOverlay};
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
