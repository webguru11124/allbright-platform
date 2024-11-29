import { router } from "expo-router";
import { IconButtonProps } from "react-native-paper";

import IconButton from "@/components/IconButton";
import useTheme from "@/hooks/useTheme";

interface Props extends Omit<IconButtonProps, "icon"> {
  onBackPress?: () => void;
}

const HeaderBackButton = ({ onBackPress, ...props }: Props) => {
  const theme = useTheme();

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

export default HeaderBackButton;
