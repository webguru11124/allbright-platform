import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { GestureResponderEvent, StyleSheet, View } from "react-native";

import Dialog from "@/components/Dialog";
import { Cross, Lock, TickForButton } from "@/components/Icons";
import { useConnectionsContext } from "@/contexts/ConnectionContext";
import { useUserContext } from "@/contexts/UserContext";
import { useConnectionState } from "@/features/Member/hooks/useConnectionState";
import { ConnectionType } from "@/features/Member/types";
import Button from "@/forms/components/Button";
import {
  useConnectionAccept,
  useConnectionReject,
  useConnectionRemove,
  useConnectionRequest,
} from "@/hooks/resources/Connections/useConnectionRequest";

interface ConnectButtonProps {
  id: string;
  name: string;
  canRemoveConnection?: boolean;
  size?: "big" | "small";
  isShort?: boolean;
}

export default function ConnectButton(props: ConnectButtonProps) {
  const connections = useConnectionsContext();
  const { user } = useUserContext();

  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [showRemoveConnectionDialog, setShowRemoveConnectionDialog] = React.useState(false);

  const otherUserId = props.id;
  const connection = connections?.connIds[otherUserId];
  const { isAcceptedConnection, isMyRequest, isTheirRequest, isCancelled, isIgnored, isRemoved } =
    useConnectionState(connection);
  const { mutateAsync: requestConnection } = useConnectionRequest();
  const { mutateAsync: acceptConnection } = useConnectionAccept();
  const { mutateAsync: rejectConnection } = useConnectionReject();
  const { mutateAsync: removeConnection } = useConnectionRemove();

  const { qrcode } = useLocalSearchParams<{ qrcode: string }>();

  // const isPaid = !!user.membership?.id;
  const isPaid = true;

  if (!user) return null;

  if (props.id === user.id) return null;

  if (!connection && !isPaid && !isTheirRequest)
    return (
      <Button
        onPress={() => router.push("/digital/select-plan")}
        isLoading={isLoading}
        size={props.size}
        isWide
        data-cy="connect-button">
        Upgrade to Connect
        <Lock />
      </Button>
    );

  if (!connection)
    return (
      <Button
        onPress={onConnect}
        isLoading={isLoading}
        size={props.size}
        isWide
        data-cy="connect-button">
        Connect
      </Button>
    );

  if (isCancelled || isIgnored)
    return (
      <Button
        onPress={onConnect}
        isLoading={isLoading}
        data-cy="connect-button"
        size={props.size}
        isWide>
        Connect
      </Button>
    );

  if (isRemoved)
    return (
      <Button
        onPress={onConnect}
        isLoading={isLoading}
        size={props.size}
        isWide>
        Reconnect
      </Button>
    );

  if (isAcceptedConnection) {
    return props.canRemoveConnection ? (
      <View style={styles.connectButtonContainer}>
        <Button
          onPress={goMessage}
          size={props.size}
          data-cy={`message-connection-button--${connection?.id}`}
          isWide>
          Message
        </Button>
        <Button
          isSecondary
          onPress={() => setShowRemoveConnectionDialog(true)}
          data-cy={`remove-connection-button--${connection?.id}`}
          isWide>
          Remove
        </Button>
        {showRemoveConnectionDialog && (
          <RemoveConnectionDialog
            nameOfOtherUser={props.name}
            onConfirm={onConfirmRemoveConnection}
            onDialogClose={() => {
              setShowRemoveConnectionDialog(false);
              connections.refresh();
            }}
          />
        )}
      </View>
    ) : (
      <Button
        isSecondary
        onPress={goMessage}
        size={props.size}
        isWide
        data-cy={`message-connection-button--${connection?.id}`}>
        Message
      </Button>
    );
  }

  if (isMyRequest) {
    return (
      <Button
        isSecondary
        isWide
        onPress={() => onRemoveRequest()}
        data-cy={`remove-request-button--${connection?.id}`}>
        Remove request
      </Button>
    );
  }

  if (isTheirRequest) {
    return (
      <View style={styles.connectButtonContainer}>
        <Button
          isCircle={props.isShort}
          isSecondary
          size={props.isShort ? "big" : props.size}
          onPress={onReject}
          data-cy={`reject-connection-button--${connection?.id}`}>
          {props.isShort ? <Cross /> : "Reject"}
        </Button>
        <Button
          isCircle={props.isShort}
          onPress={onAccept}
          size={props.isShort ? "big" : props.size}
          data-cy={`accept-connection-button--${connection?.id}`}>
          {props.isShort ? <TickForButton /> : "Accept"}
        </Button>
      </View>
    );
  }

  return null;

  async function onConnect(e: GestureResponderEvent) {
    e.stopPropagation();

    setIsLoading(true);

    await requestConnection({
      receiverId: otherUserId,
      type: qrcode ? ConnectionType.QR_CODE_WEB : ConnectionType.WEB,
    });
    setIsLoading(false);
  }

  async function onAccept(event: GestureResponderEvent) {
    event.stopPropagation();
    setIsLoading(true);
    await acceptConnection(connection?.id);
    setIsLoading(false);
  }

  async function onReject() {
    setIsLoading(true);
    await rejectConnection(connection?.id);
    setIsLoading(false);
  }

  async function onRemoveRequest() {
    setIsLoading(true);
    await rejectConnection(connection?.id);
    setIsLoading(false);
  }

  async function onConfirmRemoveConnection() {
    setIsLoading(true);
    await removeConnection(connection?.id);
    setIsLoading(false);
  }

  function goMessage(e: GestureResponderEvent) {
    e.stopPropagation();

    router.push(`/messages?id=${otherUserId}`);
  }
}

function RemoveConnectionDialog(props: {
  nameOfOtherUser: string;
  onConfirm: () => Promise<void>;
  onDialogClose: () => void;
}) {
  const [dialogState, setDialogState] = React.useState("INITIAL");

  return (
    <>
      {dialogState === "INITIAL" && (
        <Dialog
          title="Remove connection"
          confirmLabel="Remove"
          onConfirmClick={async () => {
            await props.onConfirm();
            setDialogState("SUCCESS");
          }}
          cancelLabel="Keep"
          onCancelClick={() => {
            props.onDialogClose();
          }}>
          {`Are you sure you want to remove connection${props.nameOfOtherUser ? ` with ${props.nameOfOtherUser}` : ""}?`}
        </Dialog>
      )}

      {dialogState === "SUCCESS" && (
        <Dialog
          title="Connection removed"
          confirmLabel="OK"
          onConfirmClick={async () => {
            props.onDialogClose();
          }}>
          {`Your connection ${props.nameOfOtherUser ? `with ${props.nameOfOtherUser}` : ""} has been removed.`}
        </Dialog>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  connectButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
