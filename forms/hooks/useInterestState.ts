import { interests } from "@/utils/data/interests";
import React from "react";

interface useInterestStateProps {
  interests?: (typeof interests)[number][];
  updateField: (value: (typeof interests)[number][]) => void;
}
export const useInterestState = ({
  interests: defaultinterests = [],
  updateField,
}: useInterestStateProps) => {
  const [interestsState, setInterestState] =
    React.useState<(typeof interests)[number][]>(defaultinterests);
  const interestIsSelected = (interest: (typeof interests)[number]) =>
    interestsState?.includes(interest);

  const setInterestStateHandler = (interest: (typeof interests)[number]) => {
    let interestsList: (typeof interests)[number][] = [];

    if (interestIsSelected(interest)) {
      interestsList = [...interestsState].filter((item) => item !== interest);
    }

    if (!interestIsSelected(interest)) {
      interestsList = interestsState.concat(interest);
    }
    setInterestState(interestsList);
    updateField(interestsList);
  };
  return { interestsState, interestIsSelected, setInterestStateHandler };
};
