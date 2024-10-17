import { StyleSheet, View } from "react-native";

type DividerProps = {
  colour: string;
};

const Divider = (props: DividerProps) => {
  const styles = StyleSheet.create({
    divider: {
      marginVertical: 5,
      borderRadius: 2,
      height: 5,
      backgroundColor: props.colour,
    },
  });

  return <View style={styles.divider} />;
};

export default Divider;
