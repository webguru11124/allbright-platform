import { act, renderHook, waitFor } from "@testing-library/react-native";

import { useImagePicker } from "@/forms/hooks/useImagePicker";
import { useProfilePhotoUploadSection } from "@/forms/hooks/useProfilePhotoUploadSection";
import { LocalImageType } from "@/types/files/localImage";

jest.mock("@/forms/hooks/useImagePicker");

describe("useProfilePhotoUploadSection", () => {
  const mockUploadProfileImage = jest.fn();
  const mockUseImagePicker = useImagePicker as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should initialize with default profile image state", () => {
    const { result } = renderHook(() => useProfilePhotoUploadSection(mockUploadProfileImage));

    expect(result.current.profileImage).toEqual({
      state: LocalImageType.FILE_NOT_SET,
      file: null,
    });
  });

  it("should handle image upload correctly", () => {
    const { result } = renderHook(() => useProfilePhotoUploadSection(mockUploadProfileImage));

    act(() => {
      result.current.handleImageUpload("test-file.jpg");
    });

    expect(result.current.profileImage).toEqual({
      state: LocalImageType.FILE_SET,
      file: "test-file.jpg",
    });
  });

  it("should handle profile wanted toggle correctly", () => {
    const { result } = renderHook(() => useProfilePhotoUploadSection(mockUploadProfileImage));

    act(() => {
      result.current.handleProfileWantedToggle(true);
    });

    expect(result.current.profileImage.state).toBe(LocalImageType.FILE_SET);

    act(() => {
      result.current.handleProfileWantedToggle(false);
    });

    expect(result.current.profileImage.state).toBe(LocalImageType.FILE_UNSET);
  });

  it("should pick and upload profile image correctly", async () => {
    mockUseImagePicker.mockReturnValueOnce(() => Promise.resolve("picked-file.jpg"));

    const { result } = renderHook(() => useProfilePhotoUploadSection(mockUploadProfileImage));

    act(() => {
      result.current.handleImageUpload("picked-file.jpg");
    });
    await waitFor(() => {
      expect(result.current.profileImage.file).toBe("picked-file.jpg");
    });
  });
});
