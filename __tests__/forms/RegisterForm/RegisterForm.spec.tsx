import { faker } from "@faker-js/faker";
import { fireEvent, render } from "@testing-library/react-native";

import { TestProviders } from "@/__mocks__/test-utils";
import RegisterForm from "@/forms/RegisterForm/RegisterForm";

describe("RegisterForm", () => {
  const props = {
    inputs: {
      email: undefined,
      password: undefined,
      password_confirmation: undefined,
    },
    errors: {
      email: undefined,
      password: undefined,
      password_confirmation: undefined,
    },
    blurFuncs: {
      email: jest.fn(),
      password: jest.fn(),
      password_confirmation: jest.fn(),
    },
    changeTextFuncs: {
      email: jest.fn(),
      password: jest.fn(),
      password_confirmation: jest.fn(),
    },
    isFormValid: false,
    isPending: false,
    onPress: jest.fn(),
    onBackPress: jest.fn(),
  };

  describe("calls changeTextFuncs", () => {
    let screen: any;

    beforeEach(() => {
      screen = render(
        <TestProviders>
          <RegisterForm {...props} />
        </TestProviders>
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
      expect(props.changeTextFuncs.password).toHaveBeenCalledWith(expectedPassword);
    });
  });

  describe("displays errors", () => {
    let screen: any;

    beforeEach(() => {
      screen = render(
        <TestProviders>
          <RegisterForm {...props} />
        </TestProviders>
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
        <TestProviders>
          <RegisterForm {...updatedProps} />
        </TestProviders>
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
        <TestProviders>
          <RegisterForm {...updatedProps} />
        </TestProviders>
      );

      expect(screen.queryByText(updatedProps.errors.password)).not.toBeNull();
    });
  });

  describe("enables the submit button when isFormValid is true", () => {
    let screen: any;

    beforeEach(() => {
      screen = render(
        <TestProviders>
          <RegisterForm {...props} />
        </TestProviders>
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
        <TestProviders>
          <RegisterForm {...updatedProps} />
        </TestProviders>
      );

      fireEvent.press(submit);
      expect(props.onPress).toHaveBeenCalled();
    });
  });
});
