import TextInput from "@/components/TextInput";
import { SafeAreaView } from "react-native";

import Button from "@/components/Button";
import Space from "@/components/Space";
import { useState } from "react";
import { loginSchema } from "./loginSchema";

type Inputs = {
  email: string | undefined;
  password: string | undefined;
};

const LoginForm = () => {
  const [inputs, setInputs] = useState<Inputs>({
    email: undefined,
    password: undefined,
  });

  const [errors, setErrors] = useState<Inputs>({
    email: undefined,
    password: undefined,
  });

  const updateInputs = ({ name, value }: { name: string; value: any }) =>
    setInputs((prev) => ({ ...prev, [name]: value }));

  const validateInput = ({ name, value }: { name: string; value: any }) => {
    const { error } = loginSchema.extract(name).validate(value);

    setErrors((prev) => ({
      ...prev,
      [name]: error
        ? `${error.message.replace("value", name.slice(0, 1).toUpperCase() + name.slice(1))}`
        : undefined,
    }));
  };

  const onPress = () => {};

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Email"
        placeholderTextColor={"#ddd"}
        inputMode="email"
        textContentType="emailAddress"
        value={inputs.email}
        error={errors.email}
        onBlur={() => validateInput({ name: "email", value: inputs["email"] })}
        onChange={(ev) =>
          updateInputs({
            name: "email",
            value: (ev.target as unknown as HTMLInputElement).value,
          })
        }
      />
      <Space height={10} />
      <TextInput
        placeholder="Password"
        placeholderTextColor={"#ddd"}
        inputMode="text"
        textContentType="password"
        value={inputs.password}
        error={errors.password}
        onBlur={() =>
          validateInput({ name: "password", value: inputs["password"] })
        }
        onChange={(ev) =>
          updateInputs({
            name: "password",
            value: (ev.target as unknown as HTMLInputElement).value,
          })
        }
      />
      <Space height={50} />
      <Button onPress={onPress}>Submit</Button>
    </SafeAreaView>
  );
};

export default LoginForm;
