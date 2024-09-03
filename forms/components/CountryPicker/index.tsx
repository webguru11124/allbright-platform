import { useState } from "react";
import { Alert, Modal, Pressable, StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { CM } from "@/components/Typography";
import withTheme from "@/hocs/withTheme";

type Props = { error: string | undefined; theme: Theme };

const CountryPicker = ({ theme, error }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CM style={styles.modalText}>Hello World!</CM>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <CM style={styles.textStyle}>Hide Modal</CM>
            </Pressable>
          </View>
        </View>
      </Modal>
      <StyledPressable theme={theme} onPress={() => setModalVisible(true)}>
        <CM color={"rgb(73, 101, 140)"}>Country</CM>
        <MaterialIcons name={"arrow-drop-down"} size={24} color={"black"} />
      </StyledPressable>
    </View>
  );
};

const StyledPressable = styled.Pressable`
  height: 50px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(p) => p.theme.colors.inputs.background};
  padding-left: 20px;
  padding-right: 10px;
  padding-top: 15px;
  border-radius: 5px;
  color: rgb(73, 101, 140);
`;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    height: "80%",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default withTheme(CountryPicker);
