import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useMemo, useState } from "react";
import { Alert, Modal, TextInputProps } from "react-native";
import styled from "styled-components/native";

import Space from "@/components/Space";
import { CM, CS } from "@/components/Typography";
import withTheme from "@/hocs/withTheme";
import { recommendationColour } from "@/theme";
import { pickerAdaptor as organizationSize } from "@/utils/data/organisationSize";

type Props = Omit<TextInputProps, "onBlur"> & {
  onChangeText: Function;
  error: string | undefined;
  onBlur: Function;
  theme: Theme;
};

const OrganizationSizePicker = ({
  theme,
  onChangeText,
  placeholder,
  onBlur,
  error,
  value,
}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleChangeText = (value: string) => {
    onChangeText(value);
    setModalVisible(false);
  };

  const displayValue = useMemo(
    () =>
      Boolean(value)
        ? organizationSize.find((item) => item.value === value)?.label
        : undefined,
    [value]
  );

  const onCloseButtonPress = () => {
    onBlur();
    setModalVisible(!modalVisible);
  };

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
              <Title>Size of organization</Title>
              <CloseButton onPress={onCloseButtonPress}>
                <MaterialIcons
                  name={"close"}
                  size={24}
                  color={"black"}
                />
              </CloseButton>
            </TitleContainer>
            <Space height={10} />
            <ItemContainer>
              {organizationSize.map((item) => (
                <PressableItem
                  key={item.key}
                  onPress={() => handleChangeText(item.value)}>
                  <PressableLabel>{item.label}</PressableLabel>
                </PressableItem>
              ))}
            </ItemContainer>
          </ModalView>
        </CenteredView>
      </Modal>
      <StyledPressable
        theme={theme}
        onPress={() => setModalVisible(true)}
        error={error}>
        <CM color={recommendationColour.textColor}>
          {displayValue || placeholder}
        </CM>
        <MaterialIcons
          name={"arrow-drop-down"}
          size={24}
          color={"black"}
        />
      </StyledPressable>
      {error && <CS color="red">{error}</CS>}
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

const StyledPressable = styled.Pressable<{ error: string | undefined }>`
  height: 50px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(p) => p.theme.colors.inputs.background};
  padding-left: 20px;
  padding-right: 10px;
  padding-top: 15px;
  border-color: ${(p) => (Boolean(p.error) ? "red" : "transparent")};
  border-width: ${(p) => (Boolean(p.error) ? 3 : 0)}px;
  border-radius: 5px;
  color: ${recommendationColour.textColor};
`;

export default withTheme(OrganizationSizePicker);
