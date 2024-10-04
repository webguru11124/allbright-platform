import { userEvent } from "@testing-library/react-native";
import { ReactTestInstance } from "react-test-renderer";
import { render as renderFunc } from "expo-router/testing-library";
import Providers from "@/utils/providers";

export const fireBlurEvent = async (
  element: ReactTestInstance,
  text: string
) => {
  const user = userEvent.setup();
  await user.paste(element, text);
};

export const render = async (element: React.ReactElement) => {
  return renderFunc(element, { wrapper: Providers });
};
