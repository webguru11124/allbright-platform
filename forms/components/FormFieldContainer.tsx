import { StyleSheet, View } from "react-native";

import { CS } from "@/components/Typography";

type Props = {
  children: React.ReactNode;
  error?: string;
};

const FormFieldContainer = ({ children, error }: Props) => {
  return (
    <View>
      <View
        style={
          (styles.container,
          { borderColor: Boolean(error) ? "red" : "transparent", borderRadius: Boolean(error) ? 5 : 0 })
        }>
        {children}
      </View>
      {error && <CS style={styles.error}>{error}</CS>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: "transparent",
  },
  error: {
    color: "red",
  },
});

export default FormFieldContainer;
