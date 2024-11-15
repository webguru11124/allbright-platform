import { useMutation, useSuspenseQuery } from "@tanstack/react-query";

import api from "@/lib/api";
import { CareerGoalType } from "@/utils/data/careerGoals";
import { getUserId } from "@/utils/token";

export const useUserGoals = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["userGoals"],
    queryFn: async () => {
      const id = await getUserId();
      if (!id) return null;
      const response = await getGoals(id!);
      return response.data as CareerGoalType[];
    },
  });

  return {
    careerGoals: data,
  };
};

export const useUpdateUserGoals = () => {
  return useMutation({
    mutationKey: ["updateUserGoals"],
    mutationFn: async (goals: CareerGoalType[]) => {
      const id = await getUserId();
      if (!id) return null;
      return updateUserGoals(id!, goals);
    },
  });
};

export const getGoals = (userId: string) =>
  api.get(`/v1/users/${userId}/goals`);
export const updateUserGoals = (userId: string, goals: CareerGoalType[]) =>
  api.put(`/v1/users/${userId}/goals`, { goals });
