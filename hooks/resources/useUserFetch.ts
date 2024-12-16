import { useQuery } from "@tanstack/react-query";

import UserClient from "@/utils/client/user/UserClient";

type Props = {
  id: string;
};

export const useUserFetch = ({ id }: Props) =>
  useQuery({
    enabled: true,
    queryKey: ["user", { id }],
    queryFn: async () => {
      return await new UserClient().findUserById(id);
    },
  });
