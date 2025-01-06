import { SafeAreaView, StyleSheet, View } from "react-native";

import Space from "@/components/Space";
import Button from "@/forms/components/Button";
import TickBox from "@/forms/components/TickBox";
import { FormProps } from "@/forms/types/forms.types";

const PledgeForm = ({ errors, changeTextFuncs, isPending, onPress, inputs }: FormProps) => (
  <SafeAreaView>
    <View style={[styles.row]}>
      <TickBox
        testID="PledgeForm:AgreedToPledge"
        onChange={changeTextFuncs.agreedToPledge}
        value={Boolean(inputs.agreedToPledge)}
        error={errors.agreedToPledge}
        label="I have read and agree to the rules"
      />
    </View>
    <Space height={10} />

    <Button
      isLoading={isPending}
      onPress={onPress}
      testID="PledgeForm:Submit">
      Next
    </Button>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  row: {
    gap: 10,
  },
});

export default PledgeForm;
