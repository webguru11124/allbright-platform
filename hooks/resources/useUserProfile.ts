import { useQuery } from "@tanstack/react-query";

import { UserModel } from "@/types/user";
import UserClient from "@/utils/client/user/UserClient";
import { ethnicGroups } from "@/utils/data/ethnicGroups";
import { getUserId } from "@/utils/token";

export const useUserProfile = () =>
  useQuery({
    enabled: false,
    queryKey: ["user"],
    queryFn: async () => {
      const id = await getUserId();
      if (!id) return null;
      return await new UserClient().findUserById(id!);
    },
    select: (data: UserModel | undefined | null) => ({
      ...data,
      ethnicGroups: data?.ethnicGroups
        ? ethnicGroups.filter((group) =>
            data.ethnicGroups?.includes(group.value)
          )
        : [],
      careerGoals: data?.careerGoals ?? [],
      goals: data?.goals ?? [],
    }),
  });
