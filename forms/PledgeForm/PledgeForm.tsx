import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

import Space from "@/components/Space";
import Button from "@/forms/components/Button";
import TickBox from "@/forms/components/TickBox";
import { FormProps } from "@/forms/types/forms.types";

const PledgeForm = ({
  errors,
  changeTextFuncs,
  isPending,
  onPress,
  inputs,
}: FormProps) => (
  <SafeAreaView>
    <S.Row>
      <TickBox
        testID="PledgeForm:AgreedToPledge"
        onChange={changeTextFuncs.agreedToPledge}
        value={Boolean(inputs.agreedToPledge)}
        error={errors.agreedToPledge}
        label="I have read and agree to the rules"
      />
    </S.Row>
    <Space height={10} />

    <Button
      isLoading={isPending}
      onPress={onPress}
      testID="PledgeForm:Submit">
      Next
    </Button>
  </SafeAreaView>
);
const S = () => {};
S.Row = styled.View`
  display: flex;
  gap: 10px;
`;
export default PledgeForm;
