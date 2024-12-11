import { View } from "react-native";

import Link from "@/components/Link";
import { CM } from "@/components/Typography";

export default function Connect() {
  return (
    <View>
      <CM>You are on the connect page</CM>
      <Link href="/">Go Back</Link>
    </View>
  );
}
