import React from "react";
import { StyleSheet, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

type Props = {
  value: string;
  width: number;
  height: number;
};

export default function QRCodeGenerator({ value, width, height }: Props) {
  return (
    <View style={styles.container}>
      <View style={[styles.wrapper, { width: width, height: height }]}>
        <View style={styles.qrCode}>
          <QRCode
            value={value}
            size={200}
            color="black"
            backgroundColor="white"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 7,
  },
  qrCode: {
    alignItems: "center",
  },
});
