import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { CM, H4 } from "@/components/Typography";
import colours from "@/utils/ui/colours";
import Button from "../Button";
import { ArrowRight } from "@/components/Icons";
import ProfilePhotoInput from "../ProfilePhotoInput";
import TickBox from "../TickBox";
import { LocalImageType } from "@/types/files/localImage";
import { View } from "react-native";
import { useImagePicker } from "../../hooks/useImagePicker";
import { useProfilePhotoUploadSection } from "@/forms/hooks/useProfilePhotoUploadSection";

const ProfilePhotoUploadSection: FunctionComponent = () => {
  const { profileImage, handleImageUpload, handleProfileWantedToggle } =
    useProfilePhotoUploadSection();
  const imageSrc = profileImage.file;

  const pickImageAsync = useImagePicker();

  const pickProfileImage = async () => {
    try {
      const image = await pickImageAsync();
      handleImageUpload(image);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <S.CM>Profile picture</S.CM>

      <S.PhotoInformationSection>
        <S.ArrowButton onPress={pickProfileImage}>
          <ArrowRight fill={colours.lightShell} />
        </S.ArrowButton>
        <S.SelectPhotoText>
          <H4>'Select photo'</H4>
          <CM>Please ensure it is of just yourself and no one else.</CM>
        </S.SelectPhotoText>
      </S.PhotoInformationSection>

      <S.PhotoUploadPosition>
        <ProfilePhotoInput
          imageSrc={
            profileImage.state === LocalImageType.FILE_UNSET ? null : imageSrc
          }
          onFileUpload={handleImageUpload}
        />
      </S.PhotoUploadPosition>
      <TickBox
        label="I do not wish to use a photo"
        value={profileImage.state === LocalImageType.FILE_UNSET}
        onChange={handleProfileWantedToggle}
      />
    </View>
  );
};

const S = () => {};
S.ArrowButton = styled(Button)`
  padding-left: 20px;
  padding-right: 20px;
`;
S.CM = styled(CM)`
  margin-bottom: 20px;
`;

S.PhotoInformationSection = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
`;

S.PhotoUploadPosition = styled.View`
  margin-bottom: 20px;
`;

S.SelectPhotoText = styled.View`
  margin-left: 8px;
`;

export default ProfilePhotoUploadSection;
