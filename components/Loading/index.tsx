import { ActivityIndicator } from "react-native";

const Loading = () => (
  <ActivityIndicator
    size={"large"}
    color={"#0000ff"}
    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
  />
);

export default Loading;
