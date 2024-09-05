import {
  BottomSheetView,
  BottomSheetModal as RNBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { StyleSheet, View } from "react-native";

import { useEffect, useMemo, useRef } from "react";

type Props = {
  show: boolean;
  children: React.ReactNode;
};

const BottomSheetModal = ({ show, children }: Props) => {
  // ref
  const bottomSheetModalRef = useRef<RNBottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["80%", "30%"], []);

  useEffect(() => {
    if (show) {
      bottomSheetModalRef.current?.present();
    } else {
      bottomSheetModalRef.current?.close();
    }
  }, [show]);

  return (
    <View style={styles.main}>
      <RNBottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}>
        <BottomSheetView style={styles.contentContainer}>
          {children}
        </BottomSheetView>
      </RNBottomSheetModal>
    </View>
  );
};

export default BottomSheetModal;

const styles = StyleSheet.create({
  main: {
    width: "100%",
  },
  container: {
    position: "absolute",
    padding: 10,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
