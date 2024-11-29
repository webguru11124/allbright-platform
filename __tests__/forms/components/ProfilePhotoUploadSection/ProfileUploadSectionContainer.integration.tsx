import * as ImagePicker from "expo-image-picker";
import { cleanup, fireEvent, screen, waitFor } from "expo-router/testing-library";

import { render } from "@/__mocks__/test-utils";
import ProfilePhotoUploadSectionContainer from "@/forms/components/ProfilePhotoUploadSection";
import { LocalImageType } from "@/types/files/localImage";

jest.mock("expo-image-picker", () => ({
  launchImageLibraryAsync: jest.fn(),
}));

describe("ProfilePhotoUploadSectionContainer", () => {
  const mockUploadProfileImage = jest.fn();
  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it("updates state when image is selected", async () => {
    render(<ProfilePhotoUploadSectionContainer uploadProfileImage={mockUploadProfileImage} />);
    (ImagePicker.launchImageLibraryAsync as jest.Mock).mockResolvedValueOnce({
      canceled: false,
      assets: [{ uri: "image-uri" }],
    });

    const arrowButton = screen.getByTestId("ProfilePhotoUploadSection:ArrowButton");
    fireEvent.press(arrowButton);

    await waitFor(() => {
      expect(mockUploadProfileImage).toHaveBeenCalledWith({
        state: LocalImageType.FILE_SET,
        file: "image-uri",
      });
    });
  });

  it("handles image selection cancellation", async () => {
    render(<ProfilePhotoUploadSectionContainer uploadProfileImage={mockUploadProfileImage} />);
    (ImagePicker.launchImageLibraryAsync as jest.Mock).mockResolvedValueOnce({
      canceled: true,
    });

    const arrowButton = screen.getByTestId("ProfilePhotoUploadSection:ArrowButton");
    fireEvent.press(arrowButton);

    await waitFor(() => {
      expect(mockUploadProfileImage).not.toHaveBeenCalled();
    });
  });

  it("throws error when image selection fails", async () => {
    render(<ProfilePhotoUploadSectionContainer uploadProfileImage={mockUploadProfileImage} />);
    (ImagePicker.launchImageLibraryAsync as jest.Mock).mockRejectedValueOnce(new Error("Failed to pick image"));

    const arrowButton = screen.getByTestId("ProfilePhotoUploadSection:ArrowButton");
    fireEvent.press(arrowButton);

    await waitFor(() => {
      expect(mockUploadProfileImage).not.toHaveBeenCalled();
    });
  });
});
