import React, { FunctionComponent } from "react";

import { ProfileImage, useProfilePhotoUploadSection } from "@/forms/hooks/useProfilePhotoUploadSection";

import ProfilePhotoUploadSection from "./ProfilePhotoUploadSection";

interface ProfilePhotoUploadSectionProps {
  value: ProfileImage;
  uploadProfileImage: (profileImage: ProfileImage) => void;
}

const ProfilePhotoUploadSectionContainer: FunctionComponent<ProfilePhotoUploadSectionProps> = (props) => {
  const { profileImage, pickProfileImage, handleProfileWantedToggle } = useProfilePhotoUploadSection(props);

  return (
    <ProfilePhotoUploadSection
      handleProfileWantedToggle={handleProfileWantedToggle}
      pickProfileImage={pickProfileImage}
      profileImage={profileImage}
    />
  );
};

export default ProfilePhotoUploadSectionContainer;
