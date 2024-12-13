import { Dictionary } from "lodash";
import { StyleProp } from "react-native";

export type FormProps = {
  inputs: Dictionary<string | undefined | any>;
  errors: Dictionary<string | undefined>;
  blurFuncs: Dictionary<SyntheticEvent>;
  changeTextFuncs: Dictionary<SyntheticEvent>;
  isFormValid: boolean;
  isPending: boolean;
  onPress: GestureEvent;
  style?: StyleProp<LayoutProps>;
};
