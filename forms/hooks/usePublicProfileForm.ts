import Joi from "joi";

import useFormWithPassConf from "@/forms/hooks/useFormWithPassConf";
import { useUserUpdate } from "@/hooks/resources/useUserUpdate";
import { publicProfileAdaptor, PublicProfileInput } from "../adaptors";
import { useRouter } from "expo-router";
import { LocalImageType } from "@/types/files/localImage";
import UserClient from "@/utils/client/user/UserClient";

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

    const client = new UserClient();
    const input = postBody as PublicProfileInput;
    let user = publicProfileAdaptor(input);
    if (
      input.profile_image.state === LocalImageType.FILE_SET &&
      input.profile_image.file !== null
    ) {
      let newImage: string | null = null;
      try {
        newImage = await client.updateUserImage(input.profile_image.file) ?? null;
      } catch (e) {
        console.error(e);
      }
      user = {
        ...user,
        imageSrc: newImage,
      };
    }

    if (input.profile_image.state === LocalImageType.FILE_UNSET) {
      user = { ...user, imageSrc: null };
    }

    mutateUpdateUser(user, {
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
