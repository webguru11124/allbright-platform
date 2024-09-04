import { pickerAdaptor as countries } from "@/utils/data/countries";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { Alert, Modal, TextInputProps } from "react-native";
import styled from "styled-components/native";

import Space from "@/components/Space";
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
            <TitleContainer>
              <Title>Country</Title>
              <CloseButton onPress={() => setModalVisible(!modalVisible)}>
                <MaterialIcons name={"close"} size={24} color={"black"} />
              </CloseButton>
            </TitleContainer>
            <Space height={10} />
            <ItemContainer>
              {countries.map((item) => (
                <PressableItem key={item.key}>
                  <PressableLabel>{item.label}</PressableLabel>
                </PressableItem>
              ))}
            </ItemContainer>
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

const CenteredView = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
`;

const ModalView = styled.View`
  height: 70%;
  width: 100%;
  background-color: #eee;
  border-radius: 20px;
  padding-vertical: 20px;
  align-items: center;
  box-shadow: 0px 0px 15px #17171750;
  elevation: 2;
`;

const TitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
  padding: 0 20px 20px 20px;
`;

const Title = styled(CM)`
  font-size: 18px;
  font-weight: bold;
`;

const ItemContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const PressableItem = styled.Pressable`
  height: 50px;
  padding: 10px 20px;
  margin-bottom: 5px;
  border-radius: 5px;
`;

const PressableLabel = styled(CM)`
  font-size: 16px;
`;

const CloseButton = styled.Pressable`
  elevation: 2;
  background-color: transparent;
`;

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

export default withTheme(CountryPicker);
