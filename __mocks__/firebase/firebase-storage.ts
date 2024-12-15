export const getStorage = jest.fn().mockReturnValue({});

export const ref = jest.fn().mockReturnValue({});

export const uploadBytes = jest.fn().mockResolvedValue({
  ref: {
    fullPath: "test/path/image.jpg",
  },
  metadata: {},
});

export const getDownloadURL = jest.fn().mockResolvedValue("https://example.com/image.jpg");
