import { useMutation } from "@tanstack/react-query";

import UserClient from "@/utils/client/user/UserClient";

export const useUserUpdate = () =>
  useMutation({
    mutationKey: ["updateUser"],
    mutationFn: new UserClient().updateUser,
  });
