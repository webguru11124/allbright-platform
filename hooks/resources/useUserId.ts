import React, { useEffect, useState } from "react";

import { getUserId } from "@/utils/token";

export const useUserId = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const refetch = React.useCallback(async () => {
    const id = await getUserId();
    setUserId(id);
  }, []);
  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { userId, refetch };
};
