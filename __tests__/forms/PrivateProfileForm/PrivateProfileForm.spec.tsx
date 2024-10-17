import { faker } from "@faker-js/faker/.";
import { act, fireEvent, render } from "@testing-library/react-native";

import {
  convertDateToInputString,
  parseDateString,
} from "@/__mocks__/test-utils";
import PrivateProfileForm from "@/forms/PrivateProfileForm/PrivateProfileForm";
import Providers from "@/utils/providers";

describe.skip("PrivateProfileForm", () => {
  const props = {
    inputs: {},
    errors: {},
    blurFuncs: {
      interests: jest.fn(),
      jobStatus: jest.fn(),
      salary: jest.fn(),
      organisationSize: jest.fn(),
      dateOfBirth: jest.fn(),
      ethnicGroups: jest.fn(),
    },
    changeTextFuncs: {
      interests: jest.fn(),
      jobStatus: jest.fn(),
      salary: jest.fn(),
      organisationSize: jest.fn(),
      dateOfBirth: jest.fn(),
      ethnicGroups: jest.fn(),
    },
    isFormValid: false,
    isPending: false,
    onPress: jest.fn(),
  };

  describe("calls changeTextFuncs", () => {
    function changeBirthDate(date: string) {
      const dateOfBirth = screen.getByTestId("PrivateProfileForm:DateOfBirth");
      fireEvent.changeText(dateOfBirth, date);
    }
    let screen: any;

    beforeEach(() => {
      screen = render(<PrivateProfileForm {...props} />, {
        wrapper: Providers,
      });
      jest.clearAllMocks();
    });

    it("when the dateOfBirth input is updated", () => {
      const randomBirthDate = faker.date.birthdate();
      const dateInput = convertDateToInputString(randomBirthDate);
      changeBirthDate(dateInput);

      expect(props.changeTextFuncs.dateOfBirth).toHaveBeenCalledWith(
        parseDateString(dateInput)
      );
    });

    it("when the jobStatus input is updated", () => {
      const expectedJobStatus = "Employed";
      const input = screen.getByText("Job status*");
      act(() => fireEvent.changeText(input, expectedJobStatus));
      expect(props.changeTextFuncs.jobStatus).toHaveBeenCalledWith(
        expectedJobStatus
      );
    });
  });

  describe("displays errors", () => {
    let screen: any;

    beforeEach(() => {
      screen = render(
        <Providers>
          <PrivateProfileForm {...props} />
        </Providers>
      );
    });

    it("when an job status exists", () => {
      const updatedProps = {
        ...props,
        errors: {
          ...props.errors,
          jobStatus: "The job Status is required",
        },
      };

      screen.rerender(
        <Providers>
          <PrivateProfileForm {...updatedProps} />
        </Providers>
      );

      expect(screen.queryByText(updatedProps.errors.jobStatus)).not.toBeNull();
    });

    it("when interests error exists", () => {
      const updatedProps = {
        ...props,
        errors: {
          ...props.errors,
          interests: "The interest field is required",
        },
      };

      screen.rerender(
        <Providers>
          <PrivateProfileForm {...updatedProps} />
        </Providers>
      );

      expect(screen.queryByText(updatedProps.errors.interests)).not.toBeNull();
    });

    it("when dateOfBirth error exists", () => {
      const updatedProps = {
        ...props,
        errors: {
          ...props.errors,
          dateOfBirth: "The dateOfBirth field is required",
        },
      };

      screen.rerender(
        <Providers>
          <PrivateProfileForm {...updatedProps} />
        </Providers>
      );

      expect(
        screen.queryByText(updatedProps.errors.dateOfBirth)
      ).not.toBeNull();
    });
  });
});
