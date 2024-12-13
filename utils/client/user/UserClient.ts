import api from "@/lib/api";
import { UserModel } from "@/types/user";
import { base64ToFile } from "@/utils";
import { CareerGoalType } from "@/utils/data/careerGoals";
import { getUserId } from "@/utils/token";

class UserClient {
  public async findUserById(userId: string): Promise<UserModel | undefined> {
    if (!userId) return Promise.reject("Invalid User Id");

    const { data } = await api.get(`/v1/users/${userId}`);

    return data;
  }

  public async updateUser(user: Partial<UserModel>): Promise<boolean> {
    const userId = await getUserId();
    if (!userId) return Promise.reject("Invalid User Id");

    const response = await api.put(`/v1/users/${userId}`, {
      ...user,
    });
    return response.data;
  }

  public async updateUserProfileImage(imageFile: string) {
    const userId = await getUserId();
    if (!userId) return Promise.reject("Invalid User Id");

    const formData = new FormData();
    let file = base64ToFile(imageFile, "image.jpg");

    formData.append("imageSrc", file);

    const response = await api.put(`/v1/users/${userId}/profile-image`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  }

  public async getUserGoals() {
    const userId = await getUserId();
    if (!userId) return Promise.reject("Invalid User Id");
    const { data } = await api.get(`/v1/users/${userId}/goals`);
    return data;
  }

  public async updateUserGoals(goals: CareerGoalType[]) {
    const userId = await getUserId();
    if (!userId) return Promise.reject("Invalid User Id");
    const response = await api.put(`/v1/users/${userId}/goals`, { goals });
    return response.data;
  }
}
export default UserClient;
