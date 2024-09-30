import { LocalImageType } from "@/types/files/localImage";
import React from "react";

export type ProfileImage = {
  state: LocalImageType;
  file: string | null;
};

export const useProfilePhotoUploadSection = () => {
  const [profileImage, setProfileImage] = React.useState<ProfileImage>({
    state: LocalImageType.FILE_NOT_SET,
    file: null,
  });

  const handleImageUpload = (file: string) => {
    setProfileImage({ state: LocalImageType.FILE_SET, file });
  };

  const handleProfileWantedToggle = (value: string | boolean) => {
    if (value) {
      setProfileImage((profileImage) => ({
        ...profileImage,
        state: LocalImageType.FILE_SET,
      }));
    } else {
      setProfileImage((profileImage) => ({
        ...profileImage,
        state: LocalImageType.FILE_UNSET,
      }));
    }
  };

  return {
    profileImage,
    handleImageUpload,
    handleProfileWantedToggle,
  };
};
