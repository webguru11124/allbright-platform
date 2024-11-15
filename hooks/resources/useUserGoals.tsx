import { useMutation, useSuspenseQuery } from "@tanstack/react-query";

import UserClient from "@/utils/client/user/UserClient";

export const useUserGoals = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["userGoals"],
    queryFn: new UserClient().getUserGoals,
  });

  return {
    careerGoals: data,
  };
};

export const useUpdateUserGoals = () => {
  return useMutation({
    mutationKey: ["updateUserGoals"],
    mutationFn: new UserClient().updateUserGoals,
  });
};
