import { userEvent } from "@testing-library/react-native";
import { ReactTestInstance } from "react-test-renderer";

export const fireBlurEvent = async (
  element: ReactTestInstance,
  text: string,
) => {
  const user = userEvent.setup();
  await user.paste(element, text);
};
