import { act, fireEvent, render } from "@testing-library/react-native";

import PrivateProfileForm from "@/forms/PrivateProfileForm/PrivateProfileForm";
import Providers from "@/utils/providers";
import { faker } from "@faker-js/faker";
import organisationSize from "@/utils/data/organisationSize";
import { jobStatus } from "@/utils/data/jobStatus";

describe("PrivateProfileForm", () => {
  const props = {
    inputs: {
    },
    errors: {
    },
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
    let screen: any;

    beforeEach(() => {
      screen = render(<PrivateProfileForm {...props} />, {
        wrapper: Providers,
      });
      jest.clearAllMocks();
    });

    it("when the dateOfBirth input is updated", () => {
      const expected = "1/1/2000";
      const input = screen.getByTestId("PrivateProfileForm:DateOfBirth");

      act(() => {
        fireEvent.changeText(input, expected);
      });

      // Format the expected date to match the received format
      const formattedExpected = new Date(expected).toISOString();

      // Directly compare the formatted date string
      expect(props.changeTextFuncs.dateOfBirth).toHaveBeenCalledWith(
        new Date(formattedExpected)
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

      expect(screen.queryByText(updatedProps.errors.dateOfBirth)).not.toBeNull();
    });
  });
});
