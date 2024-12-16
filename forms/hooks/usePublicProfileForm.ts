import { useRouter } from "expo-router";
import * as Joi from "joi";
import * as React from "react";
import { useEffect } from "react";

import { UserContext } from "@/contexts/UserContext";
import { publicProfileAdaptor, PublicProfileInput } from "@/forms/adaptors";
import useForm from "@/forms/hooks/useForm";
import { useUserUpdate, useUserUpdateProfileImage } from "@/hooks/resources/useUserUpdate";
import { LocalImageType } from "@/types/files/localImage";
import { UserModel } from "@/types/user";
import UserClient from "@/utils/client/user/UserClient";

const usePublicProfileForm = (publicProfileSchema: Joi.PartialSchemaMap<any>) => {
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
    showErrorMessage,
  } = useForm(publicProfileSchema, {});

  useEffect(() => {
    if (user) {
      reset(user);
      if (user.imageSrc) {
        changeTextFuncs.profile_image({
          state: LocalImageType.FILE_NOT_SET,
          file: user.imageSrc,
        });
      }
    } else {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch, user]);

  const { mutateAsync: mutateUpdateUserAsync } = useUserUpdate();
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const onPress = async () => {
    // TODO: Update handling error and sucess on mutate
    try {
      if (!validateAllInputs()) throw new Error("Please fill out all required fields");
      setLoading(true);
      const input = postBody as PublicProfileInput;
      const output = publicProfileAdaptor(input);
      let imageSrc: any = null;
      imageSrc = input.profile_image.file;
      if (input.profile_image?.state === LocalImageType.FILE_SET && input.profile_image?.file !== null) {
        imageSrc = await new UserClient().uploadProfileImage(imageSrc);
      }

      if (input.profile_image?.state === LocalImageType.FILE_UNSET) {
        imageSrc = null;
      }

      await mutateUpdateUserAsync({ ...output, imageSrc });

      router.push("/onboarding/private-profile");
    } catch (error: any) {
      showErrorMessage("Error", error.message);
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

export default usePublicProfileForm;
