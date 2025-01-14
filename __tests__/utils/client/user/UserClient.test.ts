import api from "@/lib/api";
import UserClient from "@/utils/client/user/UserClient";

jest.mock("@/lib/api");

describe("UserClient", () => {
  let userClient: UserClient;

  beforeEach(() => {
    userClient = new UserClient();
    jest.clearAllMocks();
  });

  describe("paginateUserIds", () => {
    it("should return empty data when token is null", async () => {
      const result = await userClient.paginateUserIds(["id1", "id2"], null);
      expect(result).toEqual({ nextToken: null, data: [], remaining: [] });
    });

    it("should paginate user IDs correctly with a valid token", async () => {
      const userIds = ["id1", "id2", "id3", "id4", "id5"];
      const token = "id2";
      const mockData = [{ id: "id2" }, { id: "id3" }, { id: "id4" }];
      (api.post as jest.Mock).mockResolvedValueOnce({ data: mockData });

      const result = await userClient.paginateUserIds(userIds, token, 3);
      expect(result).toEqual({
        nextToken: "id5",
        data: mockData,
        remaining: ["id5"],
      });
      expect(api.post).toHaveBeenCalledWith("/v1/users", ["id1", "id2", "id3", "id4", "id5"]);
    });

    it("should handle user IDs exceeding the limit", async () => {
      const userIds = Array.from({ length: 35 }, (_, i) => `id${i + 1}`);
      const token = "id6";
      const mockData = userIds.slice(5).map((id) => ({ id }));
      (api.post as jest.Mock).mockResolvedValueOnce({ data: mockData });

      const result = await userClient.paginateUserIds(userIds, token, 30);
      expect(result).toEqual({
        nextToken: null,
        data: mockData,
        remaining: [],
      });
      expect(api.post).toHaveBeenCalledWith("/v1/users", userIds.slice(5, 35));
    });
  });
});
