import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native";

import { CXL, H3 } from "@/components/Typography";
import Button from "@/forms/components/Button";
import withTheme from "@/hocs/withTheme";

type Props = {
  title: string;
  confirmLabel: string;
  onConfirmClick: () => Promise<void>;
  cancelLabel?: string;
  onCancelClick?: () => void;
  children: React.ReactNode;
  visible?: boolean;
  theme: Theme;
  disableBackdropClick?: boolean; // New prop
};

function Dialog(props: Props) {
  const [loading, setLoading] = React.useState(false);

  const handleBackdropClick = () => {
    if (!props.disableBackdropClick && props.onCancelClick) {
      props.onCancelClick();
    }
  };

  const handleConfirmClick = async () => {
    setLoading(true);
    await props.onConfirmClick();
    setLoading(false);
  };

  return (
    <Modal
      visible={props.visible}
      transparent={true}
      animationType="fade">
      <Pressable
        style={[styles.root]}
        testID="backdrop"
        onPress={handleBackdropClick}>
        <View style={[styles.main]}>
          <View style={[styles.dialog]}>
            <Pressable
              onPress={props.onCancelClick}
              style={[styles.iconContainer]}>
              <MaterialIcons
                name="close"
                size={24}
                color={props.theme.colors.txt.dark}
              />
            </Pressable>
            <View style={styles.title}>
              <H3>{props.title}</H3>
            </View>

            <View style={styles.body}>
              <CXL>{props.children}</CXL>
            </View>

            <View style={styles.actions}>
              <View style={styles.confirmAction}>
                <Button
                  isLoading={loading}
                  onPress={handleConfirmClick}>
                  {props.confirmLabel}
                </Button>
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
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000025",
  },
  main: {
    backgroundColor: "transparent",
    width: "80%",
    maxWidth: 960,
    justifyContent: "center",
    alignItems: "center",
  },
  dialog: {
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
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 10,
    top: 20,
    width: 40,
    height: 40,
    zIndex: 2,
  },
});
export default withTheme(Dialog);
