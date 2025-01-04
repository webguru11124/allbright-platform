import { useConnectionsContext } from "@/contexts/ConnectionContext";

export default function PendingConnections({ fromMe }: { fromMe: boolean }) {
  const { connIds } = useConnectionsContext();

  return <></>;
}
