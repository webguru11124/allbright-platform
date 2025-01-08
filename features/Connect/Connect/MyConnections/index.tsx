import * as R from "ramda";
import React, { useEffect, useState } from "react";

import { useConnectionsContext } from "@/contexts/ConnectionContext";
import { ConnectionField } from "@/features/Connect/Connect/type";
import { UserModel } from "@/types/user";
import * as u from "@/utils";
import UserClient from "@/utils/client/user/UserClient";

import MembersCarousel from "./MembersCarousel";

interface Props {
  filterFunc: (conn: ConnectionField) => boolean;
  title?: string;
  datacy: string;
}

export default function MyConnections({ filterFunc, title, datacy }: Props) {
  const { connIds } = useConnectionsContext();
  const [members, setMembers] = useState([]);
  const [pageToken, setPageToken] = useState<string | undefined | null>(undefined);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    getConnectedMembers(pageToken);
  }, [connIds]);

  if (members.length === 0) return null;

  const myConnections = u.filterToArray(connIds, (_, elm) => filterFunc(elm));

  return (
    <MembersCarousel
      isLastPage={isLastPage}
      members={members}
      title={`${title} (${myConnections.length})`}
      onLoadMembers={() => getConnectedMembers(pageToken)}
    />
  );

  async function getConnectedMembers(pageToken: string | undefined | null) {
    const myConnections = u.filterToArray(connIds, (_, elm) => filterFunc(elm));
    const myConnectionIds = R.pluck("key", myConnections);
    if (myConnectionIds.length) {
      if (pageToken !== null) {
        const { nextToken, data, remaining } = await new UserClient().paginateUserIds(myConnectionIds, pageToken);
        const byNotBlocked = (user: UserModel) => !user.disabled;
        const added = members.concat(data.filter(byNotBlocked));
        setIsLastPage(remaining.length === 0);
        setMembers(added);
        setPageToken(nextToken);
      }
    } else {
      setMembers([]);
    }
  }
}
