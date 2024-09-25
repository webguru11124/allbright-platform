import { StyleSheet, View } from "react-native";
import { ReactNode } from "react";

type MasonryGridProps = {
  children: ReactNode[];
};

const MasonryGrid: React.FC<MasonryGridProps> = (props) => {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 10,
    },
  });

  return <View style={styles.container}>{props.children}</View>;
};

export default MasonryGrid;
