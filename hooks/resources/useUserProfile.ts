import { useQuery } from "@tanstack/react-query";

import UserClient from "@/utils/client/user/UserClient";

export const useUserProfile = (id: string) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => new UserClient().findUserById(id),
    enabled: !!id,
  });
};
