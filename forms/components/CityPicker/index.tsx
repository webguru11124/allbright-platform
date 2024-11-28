import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useMemo, useState } from "react";
import { Alert, Modal, TextInputProps } from "react-native";
import styled from "styled-components/native";

import Space from "@/components/Space";
import { CM, CS } from "@/components/Typography";
import TextInput from "@/forms/components/TextInput";
import withTheme from "@/hocs/withTheme";
import { recommendationColour } from "@/theme";
import OnboardingClient from "@/utils/client/user/OnboardingClient";
import { City } from "@/utils/data/cities";
import countries from "@/utils/data/countries";

type Props = Omit<TextInputProps, "onBlur"> & {
  onChangeText: Function;
  error: string | undefined;
  onBlur: Function;
  theme: Theme;
  selectedCountry?: (typeof countries)[number]["Name"] | null;
  disabled?: boolean;
};

const CityPicker = ({
  theme,
  onChangeText,
  placeholder,
  onBlur,
  error,
  selectedCountry,
  value,
  disabled,
}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState<string | undefined>(undefined);
  const cities: City[] = useMemo(() => {
    return new OnboardingClient().getCities(selectedCountry);
  }, [selectedCountry]);

  const filteredCities = useMemo(
    () =>
      searchText !== undefined
        ? cities.filter((val) =>
            val.key.toLowerCase().includes(searchText?.toLowerCase())
          )
        : cities,
    [cities, searchText]
  );

  const handleChangeText = (value: string) => {
    onChangeText(value);
    setModalVisible(false);
  };

  const displayValue = useMemo(
    () =>
      Boolean(value)
        ? cities.find((item) => item.value === value)?.label
        : undefined,
    [value, cities]
  );

  const isDisabled = useMemo(
    () => Boolean(selectedCountry) === false,
    [selectedCountry]
  );

  const onCloseButtonPress = () => {
    onBlur();
    setModalVisible(!modalVisible);
  };

  const onChangeSearchValue = (val: string) => {
    setSearchText(val);
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
              <Title>City</Title>
              <TextInputContainer>
                <TextInput
                  onChangeText={onChangeSearchValue}
                  value={searchText}
                  placeholder="Search..."
                  error={undefined}
                  onBlur={undefined}
                />
              </TextInputContainer>
              <CloseButton
                onPress={onCloseButtonPress}
                disabled={disabled}>
                <MaterialIcons
                  name={"close"}
                  size={24}
                  color={"black"}
                />
              </CloseButton>
            </TitleContainer>
            <Space height={10} />
            <ItemContainer>
              {filteredCities.map((item) => (
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
        disabled={isDisabled}
        theme={theme}
        onPress={() => setModalVisible(true)}
        error={error}>
        <CM color={isDisabled ? "#ddd" : recommendationColour.textColor}>
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
  align-items: center;
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

const TextInputContainer = styled.View`
  min-width: 200px;
`;

export default withTheme(CityPicker);
