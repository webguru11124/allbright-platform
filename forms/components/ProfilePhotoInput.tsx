import React from "react";
import styled from "styled-components/native";

import colours from "@/utils/ui/colours";
import { Image } from "react-native";
import { IconCamera } from "@/components/Icons";
import { useImagePicker } from "@/forms/hooks/useImagePicker";

interface StyleProps {
  height?: string;
  width?: string;
}
interface ProfilePhotoInputProps {
  onFileUpload: (file: string) => void;
  imageSrc?: string | null;
  height?: string;
  width?: string;
}

const ProfilePhotoInput: React.FunctionComponent<ProfilePhotoInputProps> = (
  props
) => {
  const pickImageAsync = useImagePicker();
  const getImageDisplay = () => {
    if (props.imageSrc)
      return <S.StyledImage source={{ uri: props.imageSrc }} />;

    return <S.CameraIcon data-cy="camera-icon" />;
  };
  const pickProfileImage = async () => {
    try {
      const image = await pickImageAsync();
      props.onFileUpload(image);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.DisplayPhotoSection onPress={pickProfileImage}>
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

  &:hover {
    filter: brightness(0.9);
  }
`;

S.CameraIcon = styled(IconCamera)`
  filter: contrast(0) brightness(1.4);
  transform: scale(1.6);
`;

export default ProfilePhotoInput;
