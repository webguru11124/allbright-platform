import { useGlobalSearchParams } from "expo-router";

import MemberContainer from "@/features/Member";

export default function Index() {
  const { userId } = useGlobalSearchParams();

  return <MemberContainer userId={userId as string} />;
}
