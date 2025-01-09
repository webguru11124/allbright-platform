import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import { UserModel } from "@/types/user";
import UserClient from "@/utils/client/user/UserClient";

interface Props {
  ids: string[];
}
export const useUserIds = ({ ids }: Props) => {
  return useInfiniteQuery({
    queryKey: ["userIds", ids],
    queryFn: async ({ pageParam }: { pageParam: string | undefined }) => {
      const { nextToken, data, remaining } = await new UserClient().paginateUserIds(ids, pageParam);
      return {
        nextToken,
        data: data.filter((user: UserModel) => !user.disabled),
        remaining,
      };
    },
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.remaining?.length === 0) return undefined;
      return lastPage.nextToken;
    },
    initialPageParam: undefined,
  });
};
