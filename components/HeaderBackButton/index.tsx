import { router } from "expo-router";
import { IconButtonProps } from "react-native-paper";

import IconButton from "@/components/IconButton";
import withTheme from "@/hocs/withTheme";

interface Props extends Omit<IconButtonProps, "icon"> {
  onBackPress?: () => void;
  theme: Theme;
}

const HeaderBackButton = ({ onBackPress, theme, ...props }: Props) => {
  return (
    <IconButton
      color={theme.colors.primary}
      size={36}
      onPress={() => {
        if (onBackPress) {
          onBackPress();
        } else {
          router.back();
        }
      }}
      testID={"HeaderBackButton"}
      {...props}
      icon={"chevron-left"}
    />
  );
};

export default withTheme(HeaderBackButton);
