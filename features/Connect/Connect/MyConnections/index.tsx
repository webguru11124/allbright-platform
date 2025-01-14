import _ from "lodash";
import React from "react";

import { useConnectionsContext } from "@/contexts/ConnectionContext";
import MembersCarousel from "@/features/Connect/components/MembersCarousel";
import { ConnectionField } from "@/features/Connect/Connect/type";
import { useUserIds } from "@/hooks/resources/Users/useUserIds";
import { UserModel } from "@/types/user";
import * as u from "@/utils";

interface Props {
  filterFunc: (conn: ConnectionField) => boolean;
  datacy: string;
  showCompact: boolean;
  title?: string;
}

export default function MyConnections({ showCompact, filterFunc, title, datacy }: Props) {
  const { connIds } = useConnectionsContext();

  const myConnections = React.useMemo(
    () => u.filterToArray(connIds, (_, elm) => filterFunc(elm)),
    [connIds, filterFunc]
  );
  const myConnectionIds = React.useMemo(() => _.map(myConnections, "key"), [myConnections]);

  const {
    data: users,
    fetchNextPage,
    hasNextPage,
  } = useUserIds({
    ids: myConnectionIds,
  });

  const members = users?.pages.flatMap((page) => page.data) as UserModel[];

  if (myConnectionIds.length === 0) return null;

  return (
    <MembersCarousel
      showCompact={showCompact}
      isLastPage={!hasNextPage}
      members={members ?? []}
      title={`${title} (${myConnections.length})`}
      onLoadMembers={() => fetchNextPage()}
    />
  );
}
