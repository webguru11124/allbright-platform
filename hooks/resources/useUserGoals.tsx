import { useMutation, useQuery } from "@tanstack/react-query";

import UserClient from "@/utils/client/user/UserClient";
import { CareerGoalType } from "@/utils/data/careerGoals";
import { getUserId } from "@/utils/token";

export const useUserGoals = () => {
  const { data, refetch } = useQuery({
    queryKey: ["userGoals"],
    queryFn: async () => {
      const userId = await getUserId();
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

export const useUpdateUserGoals = () => {
  return useMutation({
    mutationKey: ["updateUserGoals"],
    mutationFn: async (goals: CareerGoalType[]) => {
      const userId = await getUserId();
      if (!userId) throw new Error("User ID not available");
      return new UserClient().updateUserGoals(userId, goals);
    },
  });
};
