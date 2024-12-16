import React from "react";

import { LocalImageType } from "@/types/files/localImage";

import { useImagePicker } from "./useImagePicker";

export type ProfileImage = {
  state: LocalImageType;
  file: string | null;
};

interface ProfilePhotoUploadSectionProps {
  value: ProfileImage;
  uploadProfileImage: (profileImage: ProfileImage) => void;
}

export const useProfilePhotoUploadSection = ({ value, uploadProfileImage }: ProfilePhotoUploadSectionProps) => {
  const pickImageAsync = useImagePicker();

  const pickProfileImage = async () => {
    const image = await pickImageAsync();
    handleImageUpload(image);
  };
  const [profileImage, setProfileImage] = React.useState<ProfileImage>({
    state: LocalImageType.FILE_NOT_SET,
    file: null,
  });

  React.useEffect(() => {
    if (value?.state === LocalImageType.FILE_SET) setProfileImage(value);
  }, [value]);

  const handleImageUpload = (file: string) => {
    setProfileImage({ state: LocalImageType.FILE_SET, file });
    uploadProfileImage({ state: LocalImageType.FILE_SET, file });
  };

  const handleProfileWantedToggle = (value: string | boolean) => {
    if (value) {
      setProfileImage((profileImage) => ({
        ...profileImage,
        state: LocalImageType.FILE_SET,
      }));
      uploadProfileImage({
        state: LocalImageType.FILE_SET,
        file: profileImage.file,
      });
    } else {
      setProfileImage((profileImage) => ({
        ...profileImage,
        state: LocalImageType.FILE_UNSET,
      }));
      uploadProfileImage({ state: LocalImageType.FILE_UNSET, file: null });
    }
  };
  return {
    profileImage,
    handleImageUpload,
    handleProfileWantedToggle,
    pickProfileImage,
  };
};
