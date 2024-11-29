import React, { FunctionComponent } from "react";

import { useEthnicGroups } from "@/forms/hooks/useEthnicGroupSelection";
import { ethnicGroups } from "@/utils/data/ethnicGroups";

import EthnicGroupsSection from "./EthnicGroupSelection";

interface EthnicGroupsSectionProps {
  field?: (typeof ethnicGroups)[number][];
  setField: (value: (typeof ethnicGroups)[number][]) => void;
  error?: string;
}

const EthnicGroupsSectionContainer: FunctionComponent<EthnicGroupsSectionProps> = ({ field = [], setField, error }) => {
  const { checkIfChecked, checkIfDisabled, onEthnicGroupsChange } = useEthnicGroups({
    field: field,
    setField: setField,
  });

  return (
    <EthnicGroupsSection
      error={error}
      checkIfChecked={checkIfChecked}
      checkIfDisabled={checkIfDisabled}
      onEthnicGroupsChange={onEthnicGroupsChange}
    />
  );
};

export default EthnicGroupsSectionContainer;
