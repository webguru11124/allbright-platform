import { ConnectionType } from "@/features/Member/types";
import api from "@/lib/api";

class ConnectionClient {
  public async getConnections() {
    const response = await api.get("/v1/connections/me/connections");

    return response.data;
  }

  public async requestConnection(receiverId: string, type: ConnectionType) {
    const response = await api.post("/v1/connections/request", {
      receiverId,
      type: type,
    });

    return response.data;
  }

  public async acceptConnection(connectionId: string) {
    const response = await api.post(`/v1/connections/accept/${connectionId}`);

    return response.data;
  }

  public async rejectConnection(connectionId: string) {
    const response = await api.post(`/v1/connections/reject/${connectionId}`);

    return response.data;
  }

  public async removeConnection(connectionId: string) {
    const response = await api.delete(`/v1/connections/remove/${connectionId}`);

    return response.data;
  }
}

export default ConnectionClient;
