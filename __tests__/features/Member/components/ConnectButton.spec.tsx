import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";

import { TestProviders } from "@/__mocks__/test-utils";
import { useConnectionsContext } from "@/contexts/ConnectionContext";
import { useUserContext } from "@/contexts/UserContext";
import ConnectButton from "@/features/Member/components/ConnectButton";
import {
  useConnectionAccept,
  useConnectionReject,
  useConnectionRemove,
  useConnectionRequest,
} from "@/hooks/resources/Connections/useConnectionRequest";
import ConnectionClient from "@/utils/client/user/ConnectionClient";

jest.mock("expo-router");
jest.mock("@/hooks/resources/Connections/useConnectionRequest");
jest.mock("@/contexts/ConnectionContext");
jest.mock("@/contexts/UserContext");
jest.mock("@/lib/api");
jest.mock("@/utils/client/user/ConnectionClient");

describe("ConnectButton", () => {
  const mockRouterPush = jest.fn();
  const mockRequestConnection = jest.fn();
  const mockAcceptConnection = jest.fn();
  const mockRejectConnection = jest.fn();
  const mockRemoveConnection = jest.fn();
  const mockUseLocalSearchParams = jest.fn(() => ({ qrCode: "12345" }));

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockRouterPush });
    (useConnectionRequest as jest.Mock).mockReturnValue({ mutateAsync: mockRequestConnection });
    (useConnectionAccept as jest.Mock).mockReturnValue({ mutateAsync: mockAcceptConnection });
    (useConnectionReject as jest.Mock).mockReturnValue({ mutateAsync: mockRejectConnection });
    (useConnectionRemove as jest.Mock).mockReturnValue({ mutateAsync: mockRemoveConnection });

    (useLocalSearchParams as jest.Mock).mockReturnValue(mockUseLocalSearchParams);

    ConnectionClient.prototype.getConnections = jest.fn();
    ConnectionClient.prototype.requestConnection = jest.fn();
    ConnectionClient.prototype.acceptConnection = jest.fn();
    ConnectionClient.prototype.rejectConnection = jest.fn();
    ConnectionClient.prototype.removeConnection = jest.fn();
  });

  const renderComponent = (connectionState: any, user: any, otherUserId: string) => {
    (useConnectionsContext as jest.Mock).mockReturnValue({
      connIds: { [otherUserId]: connectionState },
    });
    (useUserContext as jest.Mock).mockReturnValue({ user });

    return render(
      <ConnectButton
        id={otherUserId}
        name="Tiana"
        size="big"
      />,
      {
        wrapper: TestProviders,
      }
    );
  };
  it("should handle connection request", async () => {
    const connectionState = null;
    const user = { id: "user1", membership: { id: "membership1" } };
    const otherUserId = "user2";

    const { getByText } = renderComponent(connectionState, user, otherUserId);

    fireEvent.press(getByText("Connect"));
    await waitFor(() => {
      expect(mockRequestConnection).toHaveBeenCalledWith({ receiverId: otherUserId, type: "WEB" });
    });
  });

  it("should render correctly for an accepted connection", () => {
    const connectionState = { state: "ACCEPTED" };
    const user = { id: "user1", membership: { id: "membership1" } };
    const otherUserId = "user2";

    const { getByText } = renderComponent(connectionState, user, otherUserId);

    expect(getByText("Message")).toBeTruthy();
  });

  it("should render correctly for a pending connection request", () => {
    const connectionState = { state: "PENDING", isMyRequest: true };
    const user = { id: "user1", membership: { id: "membership1" } };
    const otherUserId = "user2";

    const { getByText } = renderComponent(connectionState, user, otherUserId);

    expect(getByText("Remove request")).toBeTruthy();
  });

  it("should handle accept connection", async () => {
    const connectionState = { id: "conn-1", state: "PENDING", isMyRequest: false };
    const user = { id: "user1", membership: { id: "membership1" } };
    const otherUserId = "user2";

    const { getByText } = renderComponent(connectionState, user, otherUserId);

    fireEvent.press(getByText("Accept"));

    await waitFor(() => {
      expect(mockAcceptConnection).toHaveBeenCalledWith("conn-1");
    });
  });

  it("should handle reject connection", async () => {
    const connectionState = { id: "conn-1", state: "PENDING", isMyRequest: false };
    const user = { id: "user1", membership: { id: "membership1" } };
    const otherUserId = "user2";

    const { getByText } = renderComponent(connectionState, user, otherUserId);

    fireEvent.press(getByText("Reject"));

    await waitFor(() => {
      expect(mockRejectConnection).toHaveBeenCalledWith("conn-1");
    });
  });

  it("should handle message connection", async () => {
    const connectionState = { state: "ACCEPTED" };
    const user = { id: "user1", membership: { id: "membership1" } };
    const otherUserId = "user2";

    const { getByText } = renderComponent(connectionState, user, otherUserId);

    fireEvent.press(getByText("Message"));
  });
});
