import api from "@/lib/api";
import { UserModel } from "@/types/user";
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

  public async updateUserProfileImage(imageFile: string | File | Blob) {
    const userId = await getUserId();
    if (!userId) return Promise.reject("Invalid User Id");
    console.log("imageFile", imageFile);

    const formData = new FormData();
    if (imageFile instanceof File) {
      console.log("imageFile is a File");
      formData.append("imageSrc", imageFile);
    } else if (imageFile instanceof Blob) {
      console.log("imageFile is a Blob");
      formData.append("imageSrc", new File([imageFile], "image.jpg", { type: imageFile.type }));
    } else {
      console.log("imageFile is invalid");
      throw new Error("Invalid image format");
    }

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
