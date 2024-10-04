import * as u from "../../";
import { UserModel } from "@/types/user";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import api from "@/lib/api";
import { storage } from "@/utils/client/firebase";
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
    const response = await api.put(`/v1/users/${userId}`, {
      ...user,
    });

    return response.data;
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
}

export default UserClient;
