import { Platform } from "react-native";
import Toast from "react-native-root-toast";

import useTheme from "@/hooks/useTheme";

export const useShowToast = () => {
  const theme = useTheme();
  const showToastMessage = (message: string, color: string) => {
    Toast.show(message, {
      duration: 10000,
      backgroundColor: color,
      hideOnPress: true,
      opacity: 1,
      ...Platform.select({
        web: {
          position: 92,
          containerStyle: { minWidth: 500 },
        },
        default: {
          position: Toast.positions.TOP,
          containerStyle: { minWidth: "auto" },
        },
      }),
    });
  };

  const showSuccessMessage = (message: string) => {
    showToastMessage(message, theme.colors.alert.success);
  };

  const showErrorMessage = (message: string) => {
    showToastMessage(message, theme.colors.alert.danger);
  };
  return { showSuccessMessage, showErrorMessage };
};
