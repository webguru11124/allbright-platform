import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import { ArrowRight } from "@/components/Icons";
import { CM, H4 } from "@/components/Typography";
import Button from "@/forms/components/Button";
import ProfilePhotoInput from "@/forms/components/ProfilePhotoInput";
import TickBox from "@/forms/components/TickBox";
import colors from "@/theme";
import { LocalImageType } from "@/types/files/localImage";

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
      <CM>Profile picture</CM>

      <PhotoInformationSection>
        <ArrowButton
          onPress={pickProfileImage}
          testID="ProfilePhotoUploadSection:ArrowButton">
          <ArrowRight fill={colors.lightShell} />
        </ArrowButton>
        <SelectPhotoText>
          <H4>'Select photo'</H4>
          <CMMarginBottom>
            Please ensure it is of just yourself and no one else.
          </CMMarginBottom>
        </SelectPhotoText>
      </PhotoInformationSection>

      <PhotoUploadPosition>
        <ProfilePhotoInput
          imageSrc={
            profileImage.state === LocalImageType.FILE_UNSET ? null : imageSrc
          }
          pickProfileImage={pickProfileImage}
        />
      </PhotoUploadPosition>
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

const ArrowButton = styled(Button)`
  padding-left: 20px;
  padding-right: 20px;
`;
const CMMarginBottom = styled(CM)`
  margin-bottom: 20px;
`;

const PhotoInformationSection = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  margin-top: 10px;
  align-items: center;
`;

const PhotoUploadPosition = styled.View`
  margin-bottom: 20px;
`;

const SelectPhotoText = styled.View`
  margin-left: 8px;
`;

export default ProfilePhotoUploadSection;
