import * as Joi from "joi";
import * as React from "react";
import { useEffect } from "react";

import { UserContext } from "@/contexts/UserContext";
import { publicProfileAdaptor, PublicProfileInput } from "@/forms/adaptors";
import useForm from "@/forms/hooks/useForm";
import { useUserUpdate, useUserUpdateProfileImage } from "@/hooks/resources/useUserUpdate";
import { LocalImageType } from "@/types/files/localImage";
import { UserModel } from "@/types/user";

// NOTE: Redo useShowToast and use Alert for Android/IOS and https://stackoverflow.com/a/72554509
//       for web. Ensure the toast message works on all platforms.
//       Remove toast from useForm if unneccessary...

const useAccountProfileForm = (accountProfileSchema: Joi.PartialSchemaMap<any>) => {
  const { user, refetch } = React.useContext<{
    user: Partial<UserModel> | undefined;
    refetch: Function;
  }>(UserContext);

  const {
    inputs,
    errors,
    blurFuncs,
    changeTextFuncs,
    postBody,
    isFormValid,
    reset,
    validateAllInputs,
    showSuccessMessage,
    showErrorMessage,
  } = useForm(accountProfileSchema, {});

  useEffect(() => {
    if (user) {
      reset(user);
      if (user.imageSrc) {
        changeTextFuncs.profile_image({
          state: LocalImageType.FILE_SET,
          file: user.imageSrc,
        });
      }
    } else {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch, user]);

  const { mutateAsync: mutateUpdateUserAsync } = useUserUpdate();
  const { mutateAsync: mutateUpdateUserProfileImageAsync } = useUserUpdateProfileImage();
  const [loading, setLoading] = React.useState(false);

  const onPress = async () => {
    try {
      if (!validateAllInputs()) throw new Error("Please fill out all required fields");
      setLoading(true);
      const input = postBody as PublicProfileInput;
      const output = publicProfileAdaptor(input);
      let imageSrc: any = null;
      if (input.profile_image?.state === LocalImageType.FILE_SET && input.profile_image?.file !== null) {
        imageSrc = input.profile_image.file;

        if (imageSrc instanceof File || imageSrc instanceof Blob) {
          imageSrc = await mutateUpdateUserProfileImageAsync(imageSrc);
        }
      }

      if (input.profile_image?.state === LocalImageType.FILE_UNSET) {
        imageSrc = null;
      }

      await mutateUpdateUserAsync({ ...output, imageSrc });

      showSuccessMessage("Profile information updated successfully!");
    } catch (error: any) {
      showErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    inputs,
    errors,
    blurFuncs,
    changeTextFuncs,
    isFormValid,
    isPending: loading,
    onPress,
  };
};

export default useAccountProfileForm;
