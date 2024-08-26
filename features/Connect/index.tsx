import { View } from "react-native";
import { CM } from "@/components/Typography";
import Link from "@/components/Link";

export default function Connect() {
  return (
    <View>
      <CM>You are on the connect page</CM>
      <Link href="/">Go Back</Link>
    </View>
  );
}
