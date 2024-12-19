import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";

import api from "@/lib/api";
import { UserModel } from "@/types/user";
import * as u from "@/utils";
import { base64ToFile } from "@/utils";
import { storage } from "@/utils/client/firebase";
import { CareerGoalType } from "@/utils/data/careerGoals";

class UserClient {
  public async findUserById(userId: string): Promise<UserModel | null> {
    if (!userId) throw new Error("Invalid User Id");

    const { data } = await api.get(`/v1/users/${userId}`);

    return data || null;
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

  public async uploadProfileImage(fileUrl: string): Promise<string | null> {
    if (!fileUrl) return null;
    const fileBlob: Blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", fileUrl, true);
      xhr.send(null);
    });

    const imageName = u.uuid();
    const currentFileRef = ref(storage, `images/${imageName}`);

    // Create upload task and wrap it in a promise
    const uploadTaskResult = await uploadBytes(currentFileRef, fileBlob);

    const maxRetries = 5;
    const baseDelay = 1000; // 1 second base delay

    // Retry loop for getting download URL
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const imageUrl = await getDownloadURL(uploadTaskResult.ref);
        return `${imageUrl.split("?")[0]}_800x800?${imageUrl.split("?")[1]}`;
      } catch (error: any) {
        if (error.code === "storage/object-not-found" && attempt < maxRetries) {
          const delay = Math.min(baseDelay * Math.pow(2, attempt - 1) + Math.random() * 1000, 10000);
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }
        console.error(`Failed to get download URL (attempt ${attempt}):`, error);
        throw error;
      }
    }

    throw new Error("Failed to get download URL after maximum retries");
  }
}
export default UserClient;
