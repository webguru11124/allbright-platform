import useTheme from "@/hooks/useTheme";

export const useShowToast = () => {
  const theme = useTheme();
  const showToastMessage = (message: string, color: string) => {
    console.log(message);
  };

  const showSuccessMessage = (message: string) => {
    showToastMessage(message, theme.colors.alert.success);
  };

  const showErrorMessage = (message: string) => {
    showToastMessage(message, theme.colors.alert.danger);
  };
  return { showSuccessMessage, showErrorMessage };
};
