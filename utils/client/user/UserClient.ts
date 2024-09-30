import * as u from "../../";
import { UserModel } from "@/types/user";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import api from "@/lib/api";

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
    const response = await api.post("/api/user/update-user", {
      updates: user,
    });

    if (!response.data.success)
      throw new Error("Unable to update user successfully");
    return response.data.data;
  }

  public async updateUserImage(fileUrl: string): Promise<string | undefined> {
    if (fileUrl) {
      const imageName = u.uuid();
      // Create a reference to the file in Firebase Storage
      const currentFileRef = ref(storage, imageName);

      // Fetch the file from the provided URL
      const response = await fetch(fileUrl);
      const fileBlob = await response.blob();

      // Upload the file to Firebase Storage
      await uploadBytes(currentFileRef, fileBlob);

      // Get the download URL of the uploaded file
      const imageUrl = await getDownloadURL(currentFileRef);

      // Return the modified image URL
      return `${imageUrl.split("?")[0]}_800x800?${imageUrl.split("?")[1]}`;
    }
  }

  public async paginateUserIds(
    userIds: string[],
    token: string | undefined | null
  ) {
    if (token === null) return { nextToken: null, data: [], remaining: [] };

    let ids = [...userIds];
    const limit = 30;
    const start =
      token && userIds.includes(token)
        ? userIds.findIndex((el) => el === token)
        : 0;
    const end = start + limit;

    if (ids.length > 30) {
      ids = ids.slice(start, end);
    }

    const { data } = (await api.post("/api/user/get-by-id", { id: ids })).data;

    return {
      nextToken: userIds[end] || null,
      data,
      remaining: userIds.slice(end) || [],
    };
  }
}

export default UserClient;
