import { useQuery } from "@tanstack/react-query";

import api from "@/lib/api";

export function useUserConnections() {
  return useQuery({
    queryKey: ["user-connections"],
    queryFn: async () => {
      return await api.get(`/connections/me/connections`);
    },
  });
}
