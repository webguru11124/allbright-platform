import { useQuery } from "@tanstack/react-query";

import ConnectionClient from "@/utils/client/user/ConnectionClient";

export function useUserConnections() {
  return useQuery({
    queryKey: ["user-connections"],
    queryFn: async () => {
      return await new ConnectionClient().getConnections();
    },
  });
}
