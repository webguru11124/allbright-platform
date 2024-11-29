import React, { FunctionComponent, useContext } from "react";
import styled, { css } from "styled-components/native";

import { Tick } from "@/components/Icons/index";
import Space from "@/components/Space";
import { CL, CM, H5 } from "@/components/Typography";
import { MediaQueryContext } from "@/contexts/MediaQueryContext";
import FormFieldContainer from "@/forms/components/FormFieldContainer";
import { BREAKPOINT_TABLET } from "@/hooks/useMediaQuery";
import colors from "@/theme";
import { ethnicGroups } from "@/utils/data/ethnicGroups";

type StyleProps = {
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
  other?: boolean;
  maxWidth: (val: number) => boolean;
};

interface EthnicGroupsSectionProps {
  checkIfChecked: (ethnicGroup: (typeof ethnicGroups)[number]) => boolean;
  checkIfDisabled: (ethnicGroup: (typeof ethnicGroups)[number]) => boolean;
  onEthnicGroupsChange: (ethnicGroup: {
    title: string;
    value?: string;
    id: string;
  }) => void;
  error?: string;
}

const EthnicGroupsSection: FunctionComponent<EthnicGroupsSectionProps> = (
  props
) => {
  const { error, checkIfChecked, checkIfDisabled, onEthnicGroupsChange } =
    props;
  const { maxWidth } = useContext<MediaQuery>(MediaQueryContext);

  return (
    <S.Container data-cy="ethnic-groups-container">
      <H5>Please describe your race/ethnicity (check all that apply)</H5>
      <CM>
        Inclusion is one of our priorities at AllBright and we are committed to
        creating an environment that is representative of all women.
        <Space height={10} />
        This data will only be used to help us create a space that provides
        equity for all of our members.
      </CM>
      <FormFieldContainer error={error}>
        {[...ethnicGroups].map((elm) => (
          <S.OptionContainer
            maxWidth={maxWidth}
            key={elm.title}
            disabled={checkIfDisabled(elm)}>
            {elm.title === "Other" ? (
              <S.TextInput
                maxWidth={maxWidth}
                aria-disabled={checkIfDisabled(elm)}
                aria-invalid={props.error}
                disabled={checkIfDisabled(elm)}
                id={elm.id}
                placeholder={"Other (please specify)"}
                placeholderTextColor={
                  checkIfDisabled(elm) ? colors.charcoalFaded : colors.charcoal
                }
                checked={checkIfChecked(elm)}
                onChangeText={(value) =>
                  onEthnicGroupsChange({
                    title: elm.title,
                    value: value,
                    id: elm.id,
                  })
                }
                data-cy={`other-ethnicity-option`}
                testID={`ethnic-group-option-${elm.title}`}
              />
            ) : (
              <S.Checkbox
                aria-disabled={checkIfDisabled(elm)}
                aria-invalid={props.error}
                disabled={checkIfDisabled(elm)}
                id={elm.id}
                checked={checkIfChecked(elm)}
                onPress={() => onEthnicGroupsChange(elm)}
                data-cy={`${elm.title}-option`}
                testID={`ethnic-group-option-${elm.title}`}
                maxWidth={maxWidth}>
                <S.OptionLabel
                  maxWidth={maxWidth}
                  disabled={checkIfDisabled(elm)}>
                  {elm.title}
                </S.OptionLabel>
              </S.Checkbox>
            )}
            {checkIfChecked(elm) && (
              <S.TickIcon
                color={colors.white}
                width={20}
                height={20}
              />
            )}
          </S.OptionContainer>
        ))}
      </FormFieldContainer>
    </S.Container>
  );
};

const S = () => {};

S.Container = styled.View`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
`;

S.OptionContainer = styled.View<StyleProps>`
  height: 45px;
  width: 100%;
  position: relative;
  align-items: center;
  cursor: pointer;

  ${(p) =>
    p.disabled &&
    `
    pointer-events: none;
  `}
`;
S.Checkbox = styled.Pressable<StyleProps>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 45px;
  width: 100%;
  border: none;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${colors.shell};
  font-weight: 500;
  background: ${colors.white};
  color: ${colors.charcoal};
  justify-content: center;
  padding-left: 20px;
  cursor: pointer;

  ${(p) =>
    p.checked &&
    `
    background: ${colors.pillTeal};
  `}

  ${(p) =>
    p.disabled &&
    `
    pointer-events: none;
    background: ${colors.shellOverlay};
    cursor: default;

  `}

  ${(props) =>
    props.maxWidth(BREAKPOINT_TABLET) &&
    css`
      font-size: 1rem;
    `}
`;
S.TextInput = styled.TextInput<StyleProps>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 45px;
  width: 100%;
  border: none;
  font-weight: 500;
  background: ${colors.white};
  color: ${colors.charcoal};
  cursor: pointer;
  padding-left: 20px;

  ${(p) =>
    p.checked &&
    `
    background: ${colors.pillTeal};
  `}

  ${(p) =>
    p.disabled &&
    `
    pointer-events: none;
    background: ${colors.shellOverlay};
    cursor: default;

  `}

  cursor: text;
  padding: 0 45px 0 20px;

  ${(props) =>
    props.maxWidth(BREAKPOINT_TABLET) &&
    css`
      font-size: 1rem;
    `}
`;

S.OptionLabel = styled(CL)<StyleProps>`
  cursor: pointer;
  font-weight: 500;

  ${(p) =>
    p.other &&
    `
    width: 0;
    height: 0;
    overflow: hidden;
  `}

  ${(props) =>
    props.maxWidth(BREAKPOINT_TABLET) &&
    css`
      font-size: 1rem;
    `}
  

  ${(p) =>
    p.disabled &&
    `
  pointer-events: none;
  color: ${colors.charcoalFaded};
  `}
`;

S.TickIcon = styled(Tick)`
  position: absolute;
  top: 10px;
  right: 15px;
`;

export default EthnicGroupsSection;
