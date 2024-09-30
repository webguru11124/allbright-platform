import Joi from "joi";

import useFormWithPassConf from "@/forms/hooks/useFormWithPassConf";
import { useUserUpdate } from "@/hooks/resources/useUserUpdate";
import { publicProfileAdaptor, PublicProfileInput } from "../adaptors";
import { useRouter } from "expo-router";

const usePublicProfileForm = (
  publicProfileSchema: Joi.PartialSchemaMap<any> | undefined
) => {
  const {
    inputs,
    errors,
    blurFuncs,
    changeTextFuncs,
    postBody,
    isFormValid,
    showErrorMessage,
  } = useFormWithPassConf(publicProfileSchema, {});
  const { mutate: mutateUpdateUser, isPending: isPendingUpdateUser } =
    useUserUpdate();
  const router = useRouter();

  const onPress = async () => {
    // TODO: Update handling error and sucess on mutate
    mutateUpdateUser(publicProfileAdaptor(postBody as PublicProfileInput), {
      onSuccess: (response) => {
        console.log("response", response);
        router.replace("/onboarding/private-profile");
      },
      onError: (error: any) => {
        console.error(error);
        showErrorMessage(error.message);
      },
    });
  };

  return {
    inputs,
    errors,
    blurFuncs,
    changeTextFuncs,
    isFormValid,
    isPending: isPendingUpdateUser,
    onPress,
  };
};

export default usePublicProfileForm;
