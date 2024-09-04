import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { Alert, Modal, TextInputProps } from "react-native";
import styled from "styled-components/native";

import { CM } from "@/components/Typography";
import withTheme from "@/hocs/withTheme";

type Props = TextInputProps & { error: string | undefined; theme: Theme };

const CountryPicker = ({
  theme,
  error,
  onBlur,
  onChangeText,
  placeholder,
  value,
  placeholderTextColor,
}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <CenteredView>
          <ModalView>
            <ModalText>Hello World!</ModalText>
            <Button onPress={() => setModalVisible(!modalVisible)}>
              <Text>Hide Modal</Text>
            </Button>
          </ModalView>
        </CenteredView>
      </Modal>
      <StyledPressable theme={theme} onPress={() => setModalVisible(true)}>
        <CM color={"rgb(73, 101, 140)"}>Country</CM>
        <MaterialIcons name={"arrow-drop-down"} size={24} color={"black"} />
      </StyledPressable>
    </>
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

const CenteredView = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin-top: 22px;
`;

const ModalView = styled.View`
  margin: 20px;
  height: 80%;
  width: 100%;
  background-color: #eee;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
  shadow-color: #000;
  box-shadow: 0px 0px 15px #17171750;
  elevation: 3;
`;

const Button = styled.Pressable`
  border-radius: 20px;
  padding: 10px;
  elevation: 2;
  background-color: #2196f3;
`;

const Text = styled(CM)`
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

const ModalText = styled(CM)`
  margin-bottom: 15px;
  text-align: center;
`;

export default withTheme(CountryPicker);
