import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

import { UserModel } from "@/types/user";
import UserClient from "@/utils/client/user/UserClient";
import { getUserId } from "@/utils/token";
import { ethnicGroups } from "@/utils/data/ethnicGroups";

export const useUserProfile = () => {
  const { data: user } = useSuspenseQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const id = await getUserId();
      if (!id) return null;
      return await new UserClient().findUserById(id!);
    },
    select: (data: UserModel | undefined | null) => ({
      ...data,
      ethnicGroups: data?.ethnicGroups?
      ethnicGroups.filter((group) => data.ethnicGroups?.includes(group.value))
      : [],
      careerGoals: data?.careerGoals ?? [],
      goals: data?.goals ?? [],
    }),
  });

  return {
    data: user,
  };
};
