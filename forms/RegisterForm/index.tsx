import { Pressable, SafeAreaView, View } from "react-native";

import BottomSheetModal from "@/components/BottomSheetModal";
import Space from "@/components/Space";
import { CS } from "@/components/Typography";
import Button from "@/forms/components/Button";
import TextInput from "@/forms/components/TextInput";
import useForm from "@/forms/hooks/useForm";
import registerSchema from "@/forms/RegisterForm/registerSchema";
import { Register, useSignIn } from "@/hooks/resources/useAuth";
import { pickerAdaptor as countries } from "@/utils/data/countries";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useState } from "react";
import Picker, { PickerInput } from "../components/Picker";

const RegisterForm = () => {
  const { inputs, postBody, errors, blurFuncs, changeTextFuncs, isFormValid } =
    useForm(registerSchema);

  const { mutate, isPending } = useSignIn();

  const onPress = () => {
    if (isFormValid) {
      mutate(postBody as Register, {
        onSuccess: (response) => {
          console.log(response);
        },
        onError: (error) => {
          console.error(error);
        },
      });
    }
  };

  const [showPicker, setShowPicker] = useState<boolean>(false);

  const togglePicker = () => {
    setShowPicker((prev) => !prev);
  };

  return (
    <View style={{ flex: 1 }}>
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
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor={"#ddd"}
          inputMode="text"
          textContentType="password"
          value={inputs.password}
          error={errors.password}
          onBlur={blurFuncs.password}
          onChangeText={changeTextFuncs.password}
        />
        <Space height={10} />
        <TextInput
          secureTextEntry={true}
          placeholder="Confirm Password"
          placeholderTextColor={"#ddd"}
          inputMode="text"
          textContentType="password"
          value={inputs.password_confirmation}
          error={errors.password_confirmation}
          onBlur={blurFuncs.password_confirmation}
          onChangeText={changeTextFuncs.password_confirmation}
        />
        <Space height={10} />
        <PickerInput
          input={inputs.country}
          displayValue={
            countries.find((item) => item.value === inputs.country)?.label
          }
          error={errors.country}
          onFocus={togglePicker}
          onPress={togglePicker}
        />
        <Space height={10} />

        <Button disabled={!isFormValid} isLoading={isPending} onPress={onPress}>
          Submit
        </Button>
      </SafeAreaView>
      <BottomSheetModalProvider>
        <BottomSheetModal show={showPicker}>
          <Picker
            selectedValue={inputs.country}
            onValueChange={changeTextFuncs.country}
            togglePicker={togglePicker}
            items={countries}
            error={errors.country}
            onBlur={blurFuncs.country}
          />
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </View>
  );
};

export default RegisterForm;
