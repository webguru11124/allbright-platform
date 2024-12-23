import React from "react";

import { useUserConnections } from "@/hooks/resources/useUserConnections";
import * as asyncStorage from "@/lib/asyncStorage";

import { CACHE_CONN_IDS } from "./constants";
import { useUserContext } from "./UserContext";

const Context = React.createContext<{
  connIds: Record<string, any>;
  setConnIds: (nextIds: Record<string, any>) => void;
  refresh: () => void;
}>({
  connIds: {},
  setConnIds: () => {},
  refresh: () => {},
});

function ConnecionsProvider({ children }: { children: React.ReactNode }) {
  const { user } = useUserContext();
  const [connIds, setConnIdsState] = React.useState({});
  const { data: connections, refetch } = useUserConnections();

  React.useEffect(() => {
    if (connections) {
      setConnIds(connections);
    }
  }, [connections]);

  const value = { connIds, setConnIds, refresh: refetch };
  React.useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  return <Context.Provider value={value}>{children}</Context.Provider>;

  async function setConnIds(nextIds: Record<string, any>) {
    setConnIdsState(nextIds);
    const nextIdsStr = JSON.stringify(nextIds);
    await asyncStorage.setItem(CACHE_CONN_IDS, nextIdsStr);
  }
}

function useConnectionsContext() {
  return React.useContext(Context);
}

export { ConnecionsProvider, Context, useConnectionsContext };
