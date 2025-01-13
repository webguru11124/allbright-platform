import React, { FunctionComponent } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

import { Tick } from "@/components/Icons/index";
import Space from "@/components/Space";
import { CL, CM, H5 } from "@/components/Typography";
import FormFieldContainer from "@/forms/components/FormFieldContainer";
import withTheme from "@/hocs/withTheme";
import { ethnicGroups } from "@/utils/data/ethnicGroups";

interface EthnicGroupsSectionProps {
  isChecked: (ethnicGroup: (typeof ethnicGroups)[number]) => boolean;
  isDisabled: (ethnicGroup: (typeof ethnicGroups)[number]) => boolean;
  getOtherValue: () => string;
  onEthnicGroupsChange: (ethnicGroup: { title: string; value?: string; id: string }) => void;
  error?: string;
  theme: Theme;
}

const EthnicGroupsSection: FunctionComponent<EthnicGroupsSectionProps> = (props) => {
  const { error, isChecked, isDisabled, onEthnicGroupsChange, getOtherValue } = props;

  return (
    <View
      style={[styles.container]}
      data-cy="ethnic-groups-container">
      <H5 style={{ color: props.theme.colors.txt.dark }}>Please describe your race/ethnicity (check all that apply)</H5>
      <CM style={{ color: props.theme.colors.txt.dark }}>
        Inclusion is one of our priorities at AllBright and we are committed to creating an environment that is
        representative of all women.
        <Space height={10} />
        This data will only be used to help us create a space that provides equity for all of our members.
      </CM>
      <FormFieldContainer error={error}>
        {[...ethnicGroups].map((elm) => {
          const checked = isChecked(elm);
          const disabled = isDisabled(elm);

          return (
            <View
              style={[styles.optionContainer, disabled && { pointerEvents: "none" }]}
              key={elm.title}>
              {elm.title === "Other" ? (
                <TextInput
                  style={[
                    styles.textInput,
                    {
                      backgroundColor: props.theme.colors.inputs.background,
                      color: props.theme.colors.inputs.text,
                    },
                    checked && { backgroundColor: props.theme.colors.pill },
                    disabled && {
                      backgroundColor: props.theme.colors.overlay,
                      pointerEvents: "none",
                      cursor: "auto",
                    },
                  ]}
                  aria-disabled={disabled}
                  aria-invalid={props.error}
                  id={elm.id}
                  placeholder={"Other (please specify)"}
                  placeholderTextColor={
                    disabled ? props.theme.colors.inputs.placeholder : props.theme.colors.inputs.text
                  }
                  onChangeText={(value) =>
                    onEthnicGroupsChange({
                      title: elm.title,
                      value: value,
                      id: elm.id,
                    })
                  }
                  value={getOtherValue()}
                  data-cy={`other-ethnicity-option`}
                  testID={`ethnic-group-option-${elm.title}`}
                />
              ) : (
                <Pressable
                  style={[
                    styles.checkbox,
                    {
                      borderBottomWidth: 1,
                      borderBottomColor: props.theme.colors.background,
                      backgroundColor: props.theme.colors.inputs.background,
                    },
                    checked && { backgroundColor: props.theme.colors.pill },
                    disabled && {
                      backgroundColor: props.theme.colors.overlay,
                      pointerEvents: "none",
                      cursor: "auto",
                    },
                  ]}
                  aria-disabled={disabled}
                  aria-invalid={props.error}
                  disabled={disabled}
                  id={elm.id}
                  onPress={() => onEthnicGroupsChange(elm)}
                  data-cy={`${elm.title}-option`}
                  testID={`ethnic-group-option-${elm.title}`}>
                  <CL
                    style={[
                      styles.optionLabel,
                      { color: props.theme.colors.inputs.text },
                      disabled && { pointerEvents: "none", color: props.theme.colors.inputs.placeholder },
                    ]}>
                    {elm.value}
                  </CL>
                </Pressable>
              )}
              {checked && (
                <Tick
                  style={[styles.tickIcon]}
                  color={props.theme.colors.txt.light}
                  width={20}
                  height={20}
                />
              )}
            </View>
          );
        })}
      </FormFieldContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10,
    paddingVertical: 10,
  },
  optionContainer: {
    height: 45,
    width: "100%",
    alignItems: "center",
    cursor: "pointer",
  },
  checkbox: {
    height: 45,
    width: "100%",
    borderBottomWidth: 0,
    borderBottomColor: "transparent",
    fontWeight: 500,
    backgroundColor: "transparent",
    justifyContent: "center",
    cursor: "pointer",
    paddingLeft: 20,
  },
  textInput: {
    height: 45,
    width: "100%",
    fontWeight: "600",
    backgroundColor: "transparent",
    cursor: "pointer",
    paddingLeft: 20,
    paddingRight: 45,
  },
  optionLabel: {
    fontWeight: 500,
  },
  tickIcon: {
    position: "absolute",
    top: 10,
    right: 15,
  },
});

export default withTheme(EthnicGroupsSection);
