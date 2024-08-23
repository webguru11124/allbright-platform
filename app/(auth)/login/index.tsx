import { H1 } from "@/components/Typography";
import { Link } from "expo-router";
import { View } from "react-native";

export default function Login() {
  return (
    <View>
      <H1>Login 1</H1>
      <Link href="/">Go Back</Link>
    </View>
  );
}
