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
  const { isChecked, isDisabled, getOtherValue, onEthnicGroupsChange } = useEthnicGroups({
    field: field,
    setField: setField,
  });

  return (
    <EthnicGroupsSection
      error={error}
      getOtherValue={getOtherValue}
      isChecked={isChecked}
      isDisabled={isDisabled}
      onEthnicGroupsChange={onEthnicGroupsChange}
    />
  );
};

export default EthnicGroupsSectionContainer;
