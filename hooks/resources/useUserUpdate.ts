import UserClient from "@/utils/client/user/UserClient";
import { useMutation } from "@tanstack/react-query";

export const useUserUpdate = () =>
  useMutation({
    mutationKey: ["updateUser"],
    mutationFn: new UserClient().updateUser,
  });
