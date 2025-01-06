import { StyleSheet, View } from "react-native";
import { DatePickerInput as RNPaperDatePickerInput, enGB, registerTranslation } from "react-native-paper-dates";
import { DatePickerInputProps as RNPaperDatePickerInputProps } from "react-native-paper-dates/lib/typescript/Date/DatePickerInput.shared";

import FormFieldContainer from "@/forms/components/FormFieldContainer";

registerTranslation("en-GB", enGB);

type DatePickerInputProps = Omit<RNPaperDatePickerInputProps, "value" | "error"> & {
  value: string;
  error?: string;
};

const DatePickerInput = ({ value, error, ...props }: DatePickerInputProps) => {
  return (
    <FormFieldContainer error={error}>
      <View style={[styles.inputContainer]}>
        <RNPaperDatePickerInput
          mode="flat"
          value={value ? new Date(value) : undefined}
          {...props}
          style={[
            {
              borderRadius: 20,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              overflow: "hidden",
              backgroundColor: "#fff",
            },
            props.style,
          ]}
          error={true}
          locale="en-GB"
        />
      </View>
    </FormFieldContainer>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 57,
    overflow: "hidden",
    width: "100%",
  },
});

export default DatePickerInput;
