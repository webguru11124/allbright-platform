import { useRouter } from "expo-router";
import * as Joi from "joi";
import _ from "lodash";
import * as React from "react";
import { useEffect, useState } from "react";

import { publicProfileAdaptor, PublicProfileInput } from "@/forms/adaptors";
import useForm from "@/forms/hooks/useForm";
import { useUserProfile } from "@/hooks/resources/useUserProfile";
import { useUserUpdate } from "@/hooks/resources/useUserUpdate";
import { LocalImageType } from "@/types/files/localImage";

const usePublicProfileForm = (
  publicProfileSchema: Joi.PartialSchemaMap<any>
) => {
  const { data: user } = useUserProfile();
  const [currentUser, setCurrentUser] = useState(user);

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
    if (_.isEqual(user, currentUser) === false) {
      if (user) reset(user);
      setCurrentUser(user);
    }
  }, [user, currentUser, reset]);

  const { mutateAsync: mutateUpdateUserAsync } = useUserUpdate();
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const onPress = async () => {
    // TODO: Update handling error and sucess on mutate
    try {
      if (!validateAllInputs())
        throw new Error("Please fill out all required fields");
      setLoading(true);
      const input = postBody as PublicProfileInput;
      const output = publicProfileAdaptor(input);
      let imageSrc = null;
      if (
        input.profile_image.state === LocalImageType.FILE_SET &&
        input.profile_image.file !== null
      ) {
        imageSrc = input.profile_image.file;
      }

      if (input.profile_image.state === LocalImageType.FILE_UNSET) {
        imageSrc = null;
      }
      await mutateUpdateUserAsync({ ...output, imageSrc });

      router.replace("/onboarding/private-profile");
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

export default usePublicProfileForm;
