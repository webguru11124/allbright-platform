import { Modal, StyleSheet, View } from "react-native";

import { CXL, H3 } from "@/components/Typography";
import Button from "@/forms/components/Button";
import colors from "@/theme";

type Props = {
  title: string;
  confirmLabel: string;
  onConfirmClick: () => void;
  cancelLabel?: string;
  onCancelClick?: () => void;
  children: React.ReactNode;
  visible?: boolean;
};

export default function Dialog(props: Props) {
  return (
    <Modal
      visible={props.visible}
      transparent={true}
      animationType="fade">
      <View style={styles.dialog}>
        <View style={styles.title}>
          <H3>{props.title}</H3>
        </View>

        <View style={styles.body}>
          <CXL>{props.children}</CXL>
        </View>

        <View style={styles.actions}>
          <View style={styles.confirmAction}>
            <Button onPress={props.onConfirmClick}>{props.confirmLabel}</Button>
          </View>

          {props.cancelLabel && props.onCancelClick && (
            <View style={styles.cancelAction}>
              <Button
                isSecondary
                onPress={props.onCancelClick}>
                {props.cancelLabel}
              </Button>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  dialog: {
    backgroundColor: colors.shell,
    margin: 20,
    padding: 30,
    width: "90%",
    maxWidth: 400,
  },
  title: {
    alignItems: "flex-start",
  },
  body: {
    marginVertical: 20,
  },
  actions: {
    flexDirection: "row",
    width: "100%",
  },
  confirmAction: {
    flex: 1,
    marginRight: 10,
  },
  cancelAction: {
    flex: 1,
    marginLeft: 10,
  },
});
