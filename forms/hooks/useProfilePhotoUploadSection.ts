import { LocalImageType } from "@/types/files/localImage";
import React from "react";

export const useProfilePhotoUploadSection = () => {
  const [profileImage, setProfileImage] = React.useState<{
    state: LocalImageType;
    file: string | null;
  }>({ state: LocalImageType.FILE_NOT_SET, file: null });

  const handleImageUpload = (file: string) => {
    setProfileImage({ state: LocalImageType.FILE_SET, file });
  };

  const handleProfileWantedToggle = (value: string | boolean) => {};

  return {
    profileImage,
    handleImageUpload,
    handleProfileWantedToggle,
  };
};
