import { userEvent } from "@testing-library/react-native";
import { render as renderFunc } from "expo-router/testing-library";
import { DateTime } from "luxon";
import { ReactTestInstance } from "react-test-renderer";

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

export const convertDateToInputString = (
  date: Date,
  locale: string = "en-GB"
): string => {
  return DateTime.fromJSDate(date).setLocale(locale).toFormat("dd/MM/yyyy");
};

export const parseDateString = (
  dateString: string,
  locale: string = "en-GB"
): Date => {
  return DateTime.fromFormat(dateString, "dd/MM/yyyy", { locale }).toJSDate();
};
