import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import api from "@/lib/api";
import { UserModel } from "@/types/user";
import * as u from "@/utils";
import { base64ToFile } from "@/utils";
import { storage } from "@/utils/client/firebase";
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
    console.log(imageFile);
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

  public async uploadProfileImage(fileUrl: string): Promise<string | undefined> {
    if (fileUrl) {
      const imageName = u.uuid();
      const currentFileRef = ref(storage, `images/${imageName}`);

      const response = await fetch(fileUrl);
      const fileBlob = await response.blob();

      await uploadBytes(currentFileRef, fileBlob);

      const imageUrl = await getDownloadURL(currentFileRef);

      return `${imageUrl.split("?")[0]}_800x800?${imageUrl.split("?")[1]}`;
    } else {
      return undefined;
    }
  }
}
export default UserClient;
