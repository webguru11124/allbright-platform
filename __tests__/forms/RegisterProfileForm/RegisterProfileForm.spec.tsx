import { faker } from "@faker-js/faker";
import { fireEvent, render } from "@testing-library/react-native";

import RegisterProfileForm from "@/forms/RegisterProfileForm/RegisterProfileForm";
import Providers from "@/utils/providers";

describe("RegisterProfileForm", () => {
  const props = {
    inputs: {
      first_name: undefined,
      last_name: undefined,
      email: undefined,
      password: undefined,
      password_confirmation: undefined,
      city: undefined,
      country: undefined,
      termsAgreed: "false",
      marketingAgreed: "false",
      thirdPartyAgreed: "false",
    },
    errors: {
      first_name: undefined,
      last_name: undefined,
      email: undefined,
      password: undefined,
      password_confirmation: undefined,
      city: undefined,
      country: undefined,
      termsAgreed: undefined,
      marketingAgreed: undefined,
      thirdPartyAgreed: undefined,
    },
    blurFuncs: {
      first_name: jest.fn(),
      last_name: jest.fn(),
      email: jest.fn(),
      password: jest.fn(),
      password_confirmation: jest.fn(),
      city: jest.fn(),
      country: jest.fn(),
    },
    changeTextFuncs: {
      first_name: jest.fn(),
      last_name: jest.fn(),
      email: jest.fn(),
      password: jest.fn(),
      password_confirmation: jest.fn(),
      city: jest.fn(),
      country: jest.fn(),
      termsAgreed: jest.fn(),
      marketingAgreed: jest.fn(),
      thirdPartyAgreed: jest.fn(),
    },
    isFormValid: false,
    isPending: false,
    onPress: jest.fn(),
  };

  describe("calls changeTextFuncs", () => {
    let screen: any;

    beforeEach(() => {
      screen = render(
        <Providers>
          <RegisterProfileForm {...props} />
        </Providers>
      );
      jest.clearAllMocks();
    });

  });

  describe("displays errors", () => {
    let screen: any;

    beforeEach(() => {
      screen = render(
        <Providers>
          <RegisterProfileForm {...props} />
        </Providers>
      );
    });

    it("when an email error exists", () => {
      const updatedProps = {
        ...props,
        errors: {
          ...props.errors,
          email: "The email field is required",
          password: undefined,
        },
      };

      screen.rerender(
        <Providers>
          <RegisterProfileForm {...updatedProps} />
        </Providers>
      );

      expect(screen.queryByText(updatedProps.errors.email)).not.toBeNull();
    });

    it("when password error exists", () => {
      const updatedProps = {
        ...props,
        errors: {
          ...props.errors,
          email: undefined,
          password: "The password field is required",
        },
      };

      screen.rerender(
        <Providers>
          <RegisterProfileForm {...updatedProps} />
        </Providers>
      );

      expect(screen.queryByText(updatedProps.errors.password)).not.toBeNull();
    });
  });

  describe("enables the submit button when isFormValid is true", () => {
    let screen: any;

    beforeEach(() => {
      screen = render(
        <Providers>
          <RegisterProfileForm {...props} />
        </Providers>
      );
    });

    it("when an email is focussed, then unfocussed", () => {
      const submit = screen.getByText("Submit");

      fireEvent.press(submit);
      expect(props.onPress).not.toHaveBeenCalled();

      const updatedProps = {
        ...props,
        isFormValid: true,
      };

      screen.rerender(
        <Providers>
          <RegisterProfileForm {...updatedProps} />
        </Providers>
      );

      fireEvent.press(submit);
      expect(props.onPress).toHaveBeenCalled();
    });
  });
});
