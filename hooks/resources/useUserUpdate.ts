import { QueryCache, useMutation, useQueryClient } from "@tanstack/react-query";

import UserClient from "@/utils/client/user/UserClient";

export const useUserUpdate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateUser"],
    mutationFn: new UserClient().updateUser,
    onMutate: async (newUser) => {
      await queryClient.cancelQueries({ queryKey: ['users'] })

      const previousUser:any = queryClient.getQueryData(['users'])
      queryClient.setQueryData(['users'], (old: any) => ({ ...old, newUser }))

      return { ...previousUser, newUser }
    },
  });
};


