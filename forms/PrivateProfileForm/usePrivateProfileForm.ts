import { useRouter } from "expo-router";
import * as Joi from "joi";
import * as React from "react";

import { publicProfileAdaptor, PublicProfileInput } from "@/forms/adaptors";
import useForm from "@/forms/hooks/useForm";
import { useUserUpdate } from "@/hooks/resources/useUserUpdate";
import { LocalImageType } from "@/types/files/localImage";

const usePublicProfileForm = (
  privateProfileSchema: Joi.PartialSchemaMap<any>
) => {
  const {
    inputs,
    errors,
    blurFuncs,
    changeTextFuncs,
    postBody,
    isFormValid,
    validateAllInputs,
    showErrorMessage,
  } = useForm(privateProfileSchema, {
    default: {
      profile_image: {
        state: LocalImageType.FILE_UNSET,
        file: null,
      } as any,
    },
  });
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
      let user = publicProfileAdaptor(input);
      if (
        input.profile_image.state === LocalImageType.FILE_SET &&
        input.profile_image.file !== null
      ) {
        user = {
          ...user,
          imageSrc: input.profile_image.file,
        };
      }

      if (input.profile_image.state === LocalImageType.FILE_UNSET) {
        user = { ...user, imageSrc: null };
      }
      await mutateUpdateUserAsync(user);

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
