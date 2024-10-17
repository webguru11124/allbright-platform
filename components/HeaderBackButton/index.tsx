import { router } from "expo-router";
import IconButton from "@/components/IconButton";
import useTheme from "@/hooks/useTheme";

const HeaderBackButton = () => {
  const theme = useTheme();

  return (
    <IconButton
      icon={"chevron-left"}
      color={theme.colors.primary}
      size={36}
      onPress={() => router.back()}
      testID={"HeaderBackButton"}
    />
  );
};

export default HeaderBackButton;
