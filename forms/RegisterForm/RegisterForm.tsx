import { Pressable, SafeAreaView, StyleSheet, View } from "react-native";

import Space from "@/components/Space";
import { CS } from "@/components/Typography";
import Button from "@/forms/components/Button";
import TextInput from "@/forms/components/TextInput";
import { FormProps } from "@/forms/types/forms.types";

export const RegisterForm = ({
  inputs,
  errors,
  blurFuncs,
  changeTextFuncs,
  isFormValid,
  isPending,
  onPress,
  onBackPress,
}: FormProps & { onBackPress: () => void }) => (
  <SafeAreaView>
    <View style={[styles.backLinkContainer]}>
      <Pressable onPress={onBackPress}>
        <CS style={{ textDecorationLine: "underline" }}>Back to register screen</CS>
      </Pressable>
    </View>
    <View style={{ height: 300 }}>
      <TextInput
        placeholder="First Name"
        inputMode="text"
        textContentType="name"
        value={inputs.firstName}
        error={errors.firstName}
        onBlur={blurFuncs.firstName}
        onChangeText={changeTextFuncs.firstName}
        testID="RegisterForm:FirstName"
      />
      <Space height={10} />
      <TextInput
        placeholder="Last Name"
        inputMode="text"
        textContentType="name"
        value={inputs.lastName}
        error={errors.lastName}
        onBlur={blurFuncs.lastName}
        onChangeText={changeTextFuncs.lastName}
        testID="RegisterForm:LastName"
      />
      <Space height={10} />
      <TextInput
        placeholder="Email"
        inputMode="email"
        textContentType="emailAddress"
        value={inputs.email}
        error={errors.email}
        onBlur={blurFuncs.email}
        onChangeText={changeTextFuncs.email}
        testID="RegisterForm:Email"
      />
      <Space height={10} />
      <TextInput
        secureTextEntry={true}
        placeholder="Password"
        inputMode="text"
        textContentType="password"
        value={inputs.password}
        error={errors.password}
        onBlur={blurFuncs.password}
        onChangeText={changeTextFuncs.password}
        testID="RegisterForm:Password"
      />
      <Space height={10} />
      <TextInput
        secureTextEntry={true}
        placeholder="Confirm Password"
        inputMode="text"
        textContentType="password"
        value={inputs.password_confirmation}
        error={errors.password_confirmation}
        onBlur={blurFuncs.password_confirmation}
        onChangeText={changeTextFuncs.password_confirmation}
        testID="RegisterForm:PasswordConfirmation"
      />
    </View>
    <Space height={10} />
    <Button
      disabled={!isFormValid}
      isLoading={isPending}
      onPress={onPress}
      testID="RegisterForm:Submit">
      Submit
    </Button>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  backLinkContainer: {
    alignItems: "flex-start",
    marginBottom: 20,
  },
});

export default RegisterForm;
