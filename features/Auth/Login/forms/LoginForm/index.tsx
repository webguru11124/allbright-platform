import TextInput from "@/components/TextInput";
import { SafeAreaView } from "react-native";
import _ from "lodash";

import Button from "@/components/Button";
import Space from "@/components/Space";
import { useState } from "react";
import loginSchema, { schemaInputs } from "./loginSchema";

type EventType = { name: string; value: string };

const LoginForm = () => {
  const [inputs, setInputs] = useState<typeof schemaInputs>(schemaInputs);
  const [errors, setErrors] = useState<typeof schemaInputs>(schemaInputs);
  const [touched, setTouched] = useState<typeof schemaInputs>(schemaInputs);

  const updateInputs = ({ name, value }: EventType) =>
    setInputs((prev) => ({ ...prev, [name]: value }));

  const validateInput = ({ name, value }: EventType) => {
    setTouched((prev) => ({ ...prev, [name]: true }));

    const { error } = loginSchema.extract(name).validate(value);

    setErrors((prev) => ({
      ...prev,
      [name]: error
        ? `${error.message.replace("value", name.slice(0, 1).toUpperCase() + name.slice(1))}`
        : undefined,
    }));
  };

  const blurFuncs = _.chain(schemaInputs)
    .keys()
    .map((v) => [v, () => validateInput({ name: v, value: inputs[v] })])
    .fromPairs()
    .value();

  const onChangeText = ({ name, value }: EventType) => {
    updateInputs({
      name: name,
      value: value,
    });

    touched[name] && validateInput({ name, value });
  };

  const changeTextFuncs = _.chain(schemaInputs)
    .keys()
    .map((v) => [v, (value: string) => onChangeText({ name: v, value: value })])
    .fromPairs()
    .value();

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
        onBlur={blurFuncs.email}
        onChangeText={changeTextFuncs.email}
      />
      <Space height={10} />
      <TextInput
        placeholder="Password"
        placeholderTextColor={"#ddd"}
        inputMode="text"
        textContentType="password"
        value={inputs.password}
        error={errors.password}
        onBlur={blurFuncs.password}
        onChangeText={changeTextFuncs.password}
      />
      <Space height={50} />
      <Button onPress={onPress}>Submit</Button>
    </SafeAreaView>
  );
};

export default LoginForm;
