import { useMutation, useQueryClient } from "@tanstack/react-query";

import UserClient from "@/utils/client/user/UserClient";

export const useCareerGoalsUpdate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateUser"],
    mutationFn: new UserClient().updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });
};
