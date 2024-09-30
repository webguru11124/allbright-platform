import React, { FunctionComponent } from "react";
import { useImagePicker } from "../../hooks/useImagePicker";
import {
  ProfileImage,
  useProfilePhotoUploadSection,
} from "@/forms/hooks/useProfilePhotoUploadSection";
import ProfilePhotoUploadSection from "./ProfilePhotoUploadSection";

interface ProfilePhotoUploadSectionProps {
  uploadProfileImage: (profileImage: ProfileImage) => void;
}

const ProfilePhotoUploadSectionContainer: FunctionComponent<
  ProfilePhotoUploadSectionProps
> = (props) => {
  const { profileImage, handleImageUpload, handleProfileWantedToggle } =
    useProfilePhotoUploadSection();

  const pickImageAsync = useImagePicker();

  const pickProfileImage = async () => {
    try {
      const image = await pickImageAsync();
      handleImageUpload(image);
    } catch (error) {
      throw error;
    }
  };

  React.useEffect(() => {
    props.uploadProfileImage(profileImage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileImage]);

  return (
    <ProfilePhotoUploadSection
      handleProfileWantedToggle={handleProfileWantedToggle}
      pickProfileImage={pickProfileImage}
      profileImage={profileImage}
    />
  );
};

export default ProfilePhotoUploadSectionContainer;
