import TextInput from "@/components/TextInput";
import { SafeAreaView } from "react-native";

import Space from "@/components/Space";
import Button from "@/components/Button";

const LoginForm = () => {
  return (
    <SafeAreaView>
      <TextInput
        placeholder="Email"
        placeholderTextColor={"#ddd"}
        inputMode="email"
        textContentType="emailAddress"
      />
      <Space height={10} />
      <TextInput
        placeholder="Password"
        placeholderTextColor={"#ddd"}
        inputMode="text"
        textContentType="password"
      />
      <Space height={50} />
      <Button>Submit</Button>
    </SafeAreaView>
  );
};

export default LoginForm;
