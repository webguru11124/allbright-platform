import * as R from "ramda";
import React, { useState } from "react";

import { useConnectionsContext } from "@/contexts/ConnectionContext";
import { ConnectionField } from "@/features/Connect/Connect/type";
import { useUserIds } from "@/hooks/resources/Users/useUserIds";
import { UserModel } from "@/types/user";
import * as u from "@/utils";

import MembersCarousel from "./MembersCarousel";

interface Props {
  filterFunc: (conn: ConnectionField) => boolean;
  title?: string;
  datacy: string;
}

export default function MyConnections({ filterFunc, title, datacy }: Props) {
  const { connIds } = useConnectionsContext();

  const myConnections = React.useMemo(
    () => u.filterToArray(connIds, (_, elm) => filterFunc(elm)),
    [connIds, filterFunc]
  );
  const myConnectionIds = React.useMemo(() => R.pluck("key", myConnections), [myConnections]);

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
      isLastPage={!hasNextPage}
      members={members ?? []}
      title={`${title} (${myConnections.length})`}
      onLoadMembers={() => fetchNextPage()}
    />
  );
}
