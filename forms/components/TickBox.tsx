import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, TextInputProps, View } from "react-native";

import { CS } from "@/components/Typography";
import withTheme from "@/hocs/withTheme";

type Props = Omit<TextInputProps, "onBlur" | "value" | "onChange"> & {
  onChange: (value: string | boolean) => void;
  error?: string | undefined;
  theme: Theme;
  label: string;
  value: boolean;
};

const TickBox = ({ onChange, error, value, label, testID }: Props) => {
  const onPress = () => {
    onChange(!value);
  };

  return (
    <View style={styles.root}>
      <Pressable
        testID={testID}
        onPress={onPress}
        style={styles.tickContainer}>
        <View
          style={[
            styles.tickWrapper,
            { borderColor: Boolean(error) ? "red" : "transparent", borderWidth: Boolean(error) ? 3 : 0 },
          ]}>
          {value && (
            <MaterialIcons
              aria-checked={value}
              aria-label="Checkbox"
              name={"check"}
              size={24}
              color={"black"}
            />
          )}
        </View>
        <CS>{label}</CS>
      </Pressable>
      {error && <CS color="red">{error}</CS>}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    marginVertical: 5,
    minWidth: 200,
  },
  tickContainer: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
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
});

export default withTheme(TickBox);
