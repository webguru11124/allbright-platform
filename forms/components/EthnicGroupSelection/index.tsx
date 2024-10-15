import { useEthnicGroups } from "@/forms/hooks/useEthnicGroupSelection";
import { ethnicGroups } from "@/utils/data/ethnicGroups";
import React, { FunctionComponent } from "react";
import EthnicGroupsSection from "./EthnicGroupSelection";

interface EthnicGroupsSectionProps {
  setField: (value: (typeof ethnicGroups)[number][]) => void;
  error?: string;
}

const EthnicGroupsSectionContainer: FunctionComponent<
  EthnicGroupsSectionProps
> = (props) => {
  const { checkIfChecked, checkIfDisabled, onEthnicGroupsChange } =
    useEthnicGroups(props.setField);

  return (
    <EthnicGroupsSection
      error={props.error}
      checkIfChecked={checkIfChecked}
      checkIfDisabled={checkIfDisabled}
      onEthnicGroupsChange={onEthnicGroupsChange}
    />
  );
};

export default EthnicGroupsSectionContainer;
