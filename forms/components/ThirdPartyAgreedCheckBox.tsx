import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, TextInputProps, TouchableOpacity, View } from "react-native";

import { CS } from "@/components/Typography";
import withTheme from "@/hocs/withTheme";

type Props = Omit<TextInputProps, "onBlur"> & {
  onChangeText: (value: string | boolean) => void;
  error: string | undefined;
  theme: Theme;
};

const ThirdPartyAgreedCheckBox = ({ theme, onChangeText, error, value, testID }: Props) => {
  const onPress = () => {
    onChangeText(!value);
  };

  return (
    <>
      <TouchableOpacity
        style={[styles.tickContainer]}
        testID={testID}
        onPress={onPress}>
        <View
          style={[
            styles.tickWrapper,
            {
              backgroundColor: theme.colors.txt.light,
              borderColor: Boolean(error) ? "red" : "transparent",
              borderWidth: Boolean(error) ? 3 : 0,
            },
          ]}>
          {value && (
            <MaterialIcons
              name={"check"}
              size={24}
              color={"black"}
            />
          )}
        </View>
        <CS>
          I would like to receive news and special offers from carefully selected partners of AllBright by email to
          surprise and delight me
        </CS>
      </TouchableOpacity>
      {error && <CS style={styles.error}>{error}</CS>}
    </>
  );
};

const styles = StyleSheet.create({
  tickContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  tickWrapper: {
    width: 20,
    height: 20,
    borderRadius: 2,
    backgroundColor: "#fff",
    borderColor: "transparent",
    borderWidth: 0,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    color: "red",
  },
});

export default withTheme(ThirdPartyAgreedCheckBox);
