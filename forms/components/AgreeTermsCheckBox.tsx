import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Linking, Pressable, StyleSheet, TextInputProps, TouchableOpacity, View } from "react-native";

import { CS } from "@/components/Typography";
import { Links } from "@/constants/Links";
import withTheme from "@/hocs/withTheme";

type Props = Omit<TextInputProps, "onBlur"> & {
  onChangeText: (value: string | boolean) => void;
  error: string | undefined;
  theme: Theme;
};

const AgreeTermsCheckBox = ({ theme, onChangeText, error, value, testID }: Props) => {
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
              backgroundColor: theme.colors.inputs.background,
              borderColor: Boolean(error) ? "red" : "transparent",
              borderWidth: Boolean(error) ? 3 : 0,
            },
          ]}>
          {value && (
            <MaterialIcons
              name={"check"}
              size={16}
              color={"black"}
            />
          )}
        </View>
        <CS style={{ color: theme.colors.txt.dark }}>
          I agree to the AllBright{" "}
          <View>
            <Pressable onPress={() => Linking.openURL(Links.terms)}>
              <CS style={[styles.link, { color: theme.colors.txt.dark }]}>Terms of Use</CS>
            </Pressable>
          </View>
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
  link: {
    textDecorationLine: "underline",
  },
  error: {
    color: "red",
  },
});

export default withTheme(AgreeTermsCheckBox);
