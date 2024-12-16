import { useMutation, useQueryClient } from "@tanstack/react-query";

import { UserModel } from "@/types/user";
import UserClient from "@/utils/client/user/UserClient";
import { getUserId } from "@/utils/token";

export const useUserUpdate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateUser"],
    mutationFn: async (newUser: Partial<UserModel>) => {
      const userId = await getUserId();
      if (!userId) {
        throw new Error("User ID not available");
      }
      return new UserClient().updateUser(userId, newUser);
    },
    onSuccess: async (newUser) => {
      // const userId = await getUserId();

      await queryClient.cancelQueries({ queryKey: ["user"] });

      queryClient.setQueryData(["user"], (old: any) => ({ ...old, ...newUser }));
    },
  });
};

export const useUserUpdateProfileImage = () => {
  return useMutation({
    mutationKey: ["updateUserProfileImage"],
    mutationFn: async (imageFile: string) => {
      const userId = await getUserId();

      if (!userId) {
        throw new Error("User ID not available");
      }
      return new UserClient().updateUserProfileImage(userId, imageFile);
    },
  });
};
