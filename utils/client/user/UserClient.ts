import { UserModel } from "@/types/user";
import api from "@/lib/api";
import { getUserId } from "@/utils/token";

class UserClient {
  public async findUserById(userId: string): Promise<UserModel | undefined> {
    if (!userId) return Promise.reject("Invalid User Id");

    const { data } = (await api.post("/api/user/get-by-id", { id: [userId] }))
      .data;

    if (Array.isArray(data) && data.length === 1) {
      return data[0];
    }
  }

  public async updateUser(user: Partial<UserModel>): Promise<boolean> {
    const userId = await getUserId();
    if (!userId) return Promise.reject("Invalid User Id");
    if (user.imageSrc) {
      const response = await api.put(`/v1/users/${userId}/with-image`, {
        ...user,
      });
      return response.data;
    } else {
      const response = await api.put(`/v1/users/${userId}`, {
        ...user,
      });
      return response.data;
    }
  }
}
export default UserClient;
