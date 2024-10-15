import { DatePickerInputProps as RNPaperDatePickerInputProps } from "react-native-paper-dates/lib/typescript/Date/DatePickerInput.shared";
import { DatePickerInput as RNPaperDatePickerInput } from "react-native-paper-dates";
import styled from "styled-components/native";
import FormFieldContainer from "../FormFieldContainer";
type DatePickerInputProps = Omit<
    RNPaperDatePickerInputProps,
    "value" | "error"
> & {
    value: string;
    error?: string;
};

const DatePickerInput = ({ value, error, ...props }: DatePickerInputProps) => {
    return (
        <FormFieldContainer error={error}>
            <InputContainer>
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
                />
            </InputContainer>
        </FormFieldContainer>
    );
};
const InputContainer = styled.View`
  height: 57px;
  overflow: hidden;
  width: 100%;
`;
export default DatePickerInput;
