import { fireEvent, render } from "@testing-library/react-native";

import RegisterForm from "@/forms/RegisterForm/RegisterForm";
import Providers from "@/utils/providers";
import { faker } from "@faker-js/faker";

describe("RegisterForm", () => {
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
          <RegisterForm {...props} />
        </Providers>
      );
      jest.clearAllMocks();
    });

    it("when the email input is updated", () => {
      const expectedEmail = faker.internet.email();
      const emailInput = screen.getByText("Email");
      fireEvent.changeText(emailInput, expectedEmail);
      expect(props.changeTextFuncs.email).toHaveBeenCalledWith(expectedEmail);
    });

    it("when the password input is updated", () => {
      const expectedPassword = faker.internet.password();
      const passwordInput = screen.getByText("Password");
      fireEvent.changeText(passwordInput, expectedPassword);
      expect(props.changeTextFuncs.password).toHaveBeenCalledWith(
        expectedPassword
      );
    });
  });

  describe("displays errors", () => {
    let screen: any;

    beforeEach(() => {
      screen = render(
        <Providers>
          <RegisterForm {...props} />
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
          <RegisterForm {...updatedProps} />
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
          <RegisterForm {...updatedProps} />
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
          <RegisterForm {...props} />
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
          <RegisterForm {...updatedProps} />
        </Providers>
      );

      fireEvent.press(submit);
      expect(props.onPress).toHaveBeenCalled();
    });
  });
});
