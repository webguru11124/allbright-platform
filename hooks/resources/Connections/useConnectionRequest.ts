import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ConnectionType } from "@/features/Member/types";
import ConnectionClient from "@/utils/client/user/ConnectionClient";

export function useConnectionRequest() {
  const connectionClient = new ConnectionClient();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["connection-request"],
    mutationFn: ({ receiverId, type }: { receiverId: string; type: ConnectionType }) =>
      connectionClient.requestConnection(receiverId, type),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-connections"] });
    },
  });
}

export function useConnectionAccept() {
  const connectionClient = new ConnectionClient();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["connection-accept"],
    mutationFn: (connectionId: string) => connectionClient.acceptConnection(connectionId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-connections"] });
    },
  });
}

export function useConnectionReject() {
  const connectionClient = new ConnectionClient();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["connection-reject"],
    mutationFn: (connectionId: string) => connectionClient.rejectConnection(connectionId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-connections"] });
    },
  });
}

export function useConnectionRemove() {
  const connectionClient = new ConnectionClient();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["connection-remove"],
    mutationFn: (connectionId: string) => connectionClient.removeConnection(connectionId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-connections"] });
    },
  });
}
