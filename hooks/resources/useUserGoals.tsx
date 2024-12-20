import { useMutation, useQuery } from "@tanstack/react-query";

import UserClient from "@/utils/client/user/UserClient";
import { CareerGoalType } from "@/utils/data/careerGoals";

export const useUserGoals = (userId: string | undefined) => {
  const { data, refetch } = useQuery({
    queryKey: ["userGoals"],
    queryFn: async () => {
      if (!userId) throw new Error("User ID not available");
      return new UserClient().getUserGoals(userId);
    },
    select: (data) => data ?? [],
  });

  return {
    careerGoals: data,
    refetch: refetch,
  };
};

export const useUpdateUserGoals = (userId: string | undefined) => {
  return useMutation({
    mutationKey: ["updateUserGoals"],
    mutationFn: async (goals: CareerGoalType[]) => {
      if (!userId) throw new Error("User ID not available");
      return new UserClient().updateUserGoals(userId, goals);
    },
  });
};
