import React from "react";
import { StyleSheet, View } from "react-native";

import { ArrowRight } from "@/components/Icons";
import { CM, H4 } from "@/components/Typography";
import Button from "@/forms/components/Button";
import ProfilePhotoInput from "@/forms/components/ProfilePhotoInput";
import TickBox from "@/forms/components/TickBox";
import withTheme from "@/hocs/withTheme";
import { LocalImageType } from "@/types/files/localImage";

interface ProfilePhotoUploadSectionProps {
  handleProfileWantedToggle: (value: string | boolean) => void;
  profileImage: {
    file: string | null;
    state: LocalImageType;
  };
  pickProfileImage: () => void;
  theme: Theme;
}

const ProfilePhotoUploadSection = ({
  pickProfileImage,
  handleProfileWantedToggle,
  profileImage,
  theme,
}: ProfilePhotoUploadSectionProps) => {
  return (
    <View>
      <CM>Profile picture</CM>

      <View style={[styles.photoInformationSection]}>
        <Button
          style={[styles.arrowButton]}
          onPress={pickProfileImage}
          testID="ProfilePhotoUploadSection:ArrowButton">
          <ArrowRight fill={theme.colors.lightBackground} />
        </Button>
        <View style={[styles.selectPhotoText]}>
          <H4>'Select photo'</H4>
          <CM style={[styles.cmMarginBottom]}>Please ensure it is of just yourself and no one else.</CM>
        </View>
      </View>
      <View style={[styles.photoUploadPosition]}>
        <ProfilePhotoInput
          imageSrc={profileImage.state === LocalImageType.FILE_UNSET ? null : profileImage.file}
          pickProfileImage={pickProfileImage}
        />
      </View>
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

const styles = StyleSheet.create({
  arrowButton: {
    paddingHorizontal: 20,
  },
  cmMarginBottom: {
    marginBottom: 20,
  },
  photoInformationSection: {
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 10,
    alignItems: "center",
  },
  photoUploadPosition: {
    marginBottom: 20,
  },
  selectPhotoText: {
    width: 0,
    flex: 1,
    flexGrow: 1,
    marginLeft: 8,
  },
});

export default withTheme(ProfilePhotoUploadSection);
