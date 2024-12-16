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
      await queryClient.cancelQueries({ queryKey: ["user"] });

      const previousUser: any = queryClient.getQueryData(["user"]);
      queryClient.setQueryData(["user"], (old: UserModel | undefined) => {
        if (!old) return newUser;
        return { ...old, ...newUser };
      });

      return { ...previousUser, ...newUser };
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
