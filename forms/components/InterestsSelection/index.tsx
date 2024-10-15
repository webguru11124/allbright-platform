import React, { FunctionComponent } from "react";
import { interests } from "@/utils/data/interests";
import { useInterestState } from "@/forms/hooks/useInterestState";
import InterestsSelection from "./InterestsSelection";

interface InterestsSectionProps {
  updateField: (value: (typeof interests)[number][]) => void;
  error?: string;
}

const InterestsSection: FunctionComponent<InterestsSectionProps> = ({
  updateField,
  error,
}) => {
  const props = useInterestState({ updateField: updateField });

  return (
    <InterestsSelection
      {...props}
      error={error}
    />
  );
};

export default InterestsSection;
