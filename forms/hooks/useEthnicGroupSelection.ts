import { useEffect, useState } from "react";

import { ethnicGroups } from "@/utils/data/ethnicGroups";

type FieldsType = (typeof ethnicGroups)[number];

export const useEthnicGroups = ({
  field = [],
  setField,
}: {
  field: FieldsType[];
  setField: (value: FieldsType[]) => void;
}) => {
  const [ethnicGroupsState, setEthnicGroupsState] = useState<FieldsType[]>(field);

  useEffect(() => {
    if (field.length > 0) setEthnicGroupsState(field);
  }, [field]);

  const checkIfChecked = (elm: any) => !!ethnicGroupsState.filter((item) => item.title === elm.title).length;

  const checkIfDisabled = (elm: any) =>
    !!ethnicGroupsState.filter((item) => item.title === "Prefer not to say" && elm.title !== "Prefer not to say")
      .length;

  const changeTextFuncs = (value: FieldsType[]) => {
    setEthnicGroupsState(value);
    setField(value);
  };

  const onEthnicGroupsChange = (elm: any) => {
    const selectedGroups = [...ethnicGroupsState];
    const otherHasValue = elm.title === "Other" && elm.value.length > 0;
    const isChecked = selectedGroups.filter((e) => e.title === elm.title).length || otherHasValue;

    if (isChecked && !otherHasValue) {
      const newGroups = selectedGroups.filter((e) => e.title !== elm.title);
      changeTextFuncs(newGroups);
    } else if (elm.title === "Prefer not to say") {
      changeTextFuncs([elm]);
    } else {
      const filteredSelectedGroups = selectedGroups.filter((item) => item.title !== elm.title);
      filteredSelectedGroups.push(elm);
      changeTextFuncs(filteredSelectedGroups);
    }
  };

  return {
    checkIfChecked,
    checkIfDisabled,
    onEthnicGroupsChange,
  };
};
