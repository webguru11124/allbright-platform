import { View } from "react-native";

const Space = ({ height, width }: { height?: number; width?: number }) => (
  <View
    style={{
      height: height,
      width: width,
    }}
  />
);

export default Space;
