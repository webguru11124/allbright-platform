import { useState } from "react";

export const useEthnicGroups = (setField: (value: any[]) => void) => {
  const [ethnicGroupsState, setEthnicGroupsState] = useState<any[]>([]);

  const checkIfChecked = (elm: any) =>
    !!ethnicGroupsState.filter((item) => item.title === elm.title).length;

  const checkIfDisabled = (elm: any) =>
    !!ethnicGroupsState.filter(
      (item) =>
        item.title === "Prefer not to say" && elm.title !== "Prefer not to say"
    ).length;

  const onEthnicGroupsChange = (elm: any) => {
    let selectedGroups = [...ethnicGroupsState];
    const otherHasValue = elm.title === "Other" && elm.value.length > 0;
    const isChecked =
      !!selectedGroups.filter((e) => e.title === elm.title).length ||
      otherHasValue;

    if (isChecked && !otherHasValue) {
      const newGroups = selectedGroups.filter((e) => e.title !== elm.title);
      setEthnicGroupsState(newGroups);
      setField(newGroups);
    } else if (elm.title === "Prefer not to say") {
      setEthnicGroupsState([elm]);
      setField([elm]);
    } else {
      selectedGroups = selectedGroups.filter(
        (item) => item.title !== elm.title
      );
      selectedGroups.push(elm);
      setEthnicGroupsState(selectedGroups);
      setField(selectedGroups);
    }
  };

  return {
    checkIfChecked,
    checkIfDisabled,
    onEthnicGroupsChange,
  };
};
