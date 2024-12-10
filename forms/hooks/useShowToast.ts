import Toast from "react-native-toast-message";

export const useShowToast = () => {
  const showSuccessMessage = (title: string, message: string) => {
    showToastMessage(title, message, "success");
  };

  const showErrorMessage = (title: string, message: string) => {
    showToastMessage(title, message, "error");
  };

  const showToastMessage = (title: string, message: string, type: "success" | "error") => {
    Toast.show({
      type: type,
      text1: title,
      text2: message,
    });
  };

  return { showSuccessMessage, showErrorMessage };
};
