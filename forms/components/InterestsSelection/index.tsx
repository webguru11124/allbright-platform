import React, { FunctionComponent } from "react";

import { useInterestState } from "@/forms/hooks/useInterestState";
import { interests } from "@/utils/data/interests";

import InterestsSelection from "./InterestsSelection";

interface InterestsSectionProps {
  updateField: (value: (typeof interests)[number][]) => void;
  error?: string;
  field?: string[];
}

const InterestsSection: FunctionComponent<InterestsSectionProps> = ({
  updateField,
  error,
  field = [],
}) => {
  const props = useInterestState({
    interests: field,
    updateField: updateField,
  });

  return (
    <InterestsSelection
      {...props}
      error={error}
    />
  );
};

export default InterestsSection;
