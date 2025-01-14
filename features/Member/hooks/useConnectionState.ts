import { ConnectionState } from "@/features/Member/types";
import { Connection } from "@/types/connection/Connection";

export function useConnectionState(connection?: Connection) {
  const isAcceptedConnection = connection?.state === ConnectionState.ACCEPTED;
  const isMyRequest = connection?.state === ConnectionState.PENDING && connection?.isMyRequest;
  const isTheirRequest = connection?.state === ConnectionState.PENDING && !connection?.isMyRequest;
  const isCancelled = connection?.state === ConnectionState.CANCELLED;
  const isIgnored = connection?.state === ConnectionState.PENDING && connection?.substate === "IGNORED";
  const isRemoved = connection?.state === ConnectionState.REMOVED;

  return {
    isAcceptedConnection,
    isMyRequest,
    isTheirRequest,
    isCancelled,
    isIgnored,
    isRemoved,
  };
}
