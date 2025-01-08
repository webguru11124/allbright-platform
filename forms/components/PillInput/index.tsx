import React, { FunctionComponent } from "react";
import { Platform, Pressable, StyleSheet, Text } from "react-native";

import withTheme from "@/hocs/withTheme";

type Props = {
  name: string;
  labelText: string;
  isChecked: boolean;
  isSquare?: boolean;
  theme: Theme;
  onChange: () => void;
};

const PillInput: FunctionComponent<Props> = ({ name, labelText, isChecked, isSquare, theme, onChange }) => {
  return (
    <Pressable
      style={[
        styles.container,
        { backgroundColor: theme.colors.overlay },
        isSquare && { height: 100, width: 100, borderRadius: 5, padding: 5 },
        isChecked && { backgroundColor: theme.colors.pill },
      ]}
      data-cy={`${name.toLowerCase().replace(/[\W_]+/g, "_")}-pill`}
      onPress={onChange}
      testID={`interests-checkbox-${labelText}`}>
      <Text
        adjustsFontSizeToFit={true}
        style={[styles.label, isSquare && styles.labelSquare]}>
        {labelText}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 25,
    backgroundColor: "transparent",
    borderRadius: 50,
  },
  label: {
    textAlign: "center",
    paddingHorizontal: 20,
    zIndex: 1,
  },
  labelSquare: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    fontWeight: 500,
    ...Platform.select({
      native: {
        fontSize: 12,
      },
    }),
  },
});

export default withTheme(PillInput);
