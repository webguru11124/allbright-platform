import React from "react";
import styled from "styled-components/native";
import { CM, H4 } from "@/components/Typography";
import colours from "@/utils/ui/colours";
import Button from "../Button";
import { ArrowRight } from "@/components/Icons";
import ProfilePhotoInput from "../ProfilePhotoInput";
import TickBox from "../TickBox";
import { LocalImageType } from "@/types/files/localImage";
import { View } from "react-native";

interface ProfilePhotoUploadSectionProps {
  handleProfileWantedToggle: (value: string | boolean) => void;
  profileImage: {
    file: string | null;
    state: LocalImageType;
  };
  pickProfileImage: () => void;
}

const ProfilePhotoUploadSection = ({
  pickProfileImage,
  handleProfileWantedToggle,
  profileImage,
}: ProfilePhotoUploadSectionProps) => {
  const imageSrc = profileImage.file;
  return (
    <View>
      <S.CM>Profile picture</S.CM>

      <S.PhotoInformationSection>
        <S.ArrowButton
          onPress={pickProfileImage}
          testID="ProfilePhotoUploadSection:ArrowButton">
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
          pickProfileImage={pickProfileImage}
        />
      </S.PhotoUploadPosition>
      <TickBox
        label="I do not wish to use a photo"
        testID="ProfilePhotoUploadSection:ProfileWantedToggle"
        value={profileImage.state === LocalImageType.FILE_UNSET}
        onChange={() => {
          if (profileImage.state === LocalImageType.FILE_UNSET) {
            handleProfileWantedToggle(true);
          } else {
            handleProfileWantedToggle(false);
          }
        }}
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
