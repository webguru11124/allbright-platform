import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import api from "@/lib/api";
import { UserModel } from "@/types/user";
import * as u from "@/utils";
import { base64ToFile } from "@/utils";
import { storage } from "@/utils/client/firebase";
import { CareerGoalType } from "@/utils/data/careerGoals";

class UserClient {
  public async findUserById(userId: string): Promise<UserModel | undefined> {
    if (!userId) throw new Error("Invalid User Id");

    const { data } = await api.get(`/v1/users/${userId}`);

    return data;
  }

  public async updateUser(userId: string, user: Partial<UserModel>): Promise<UserModel> {
    if (!userId) throw new Error("Invalid User Id");

    const response = await api.put(`/v1/users/${userId}`, {
      ...user,
    });
    return response.data;
  }

  public async updateUserProfileImage(userId: string, imageFile: string) {
    if (!userId) throw new Error("Invalid User Id");

    const formData = new FormData();
    let file = base64ToFile(imageFile, "image.jpg");

    formData.append("imageSrc", file);

    const response = await api.put(`/v1/users/${userId}/profile-image`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  }

  public async getUserGoals(userId: string) {
    if (!userId) throw new Error("Invalid User Id");
    const { data } = await api.get(`/v1/users/${userId}/goals`);
    return data;
  }

  public async updateUserGoals(userId: string, goals: CareerGoalType[]) {
    if (!userId) throw new Error("Invalid User Id");
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

      const maxRetries = 5;
      const retryDelay = 1000; // 1 second

      for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
          const imageUrl = await getDownloadURL(currentFileRef);
          return `${imageUrl.split("?")[0]}_800x800?${imageUrl.split("?")[1]}`;
        } catch (error: any) {
          if (error.code === "storage/object-not-found" && attempt < maxRetries) {
            // Wait for retryDelay milliseconds before next attempt
            await new Promise((resolve) => setTimeout(resolve, retryDelay));
            continue;
          }
          throw error; // If it's not a 404 error or we've exhausted retries, throw the error
        }
      }
      throw new Error("Failed to get download URL after maximum retries");
    } else {
      return undefined;
    }
  }
}
export default UserClient;
