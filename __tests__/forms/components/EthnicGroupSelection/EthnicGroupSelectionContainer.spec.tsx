import { fireEvent, render, screen } from "@testing-library/react-native";
import React from "react";

import EthnicGroupsSectionContainer from "@/forms/components/EthnicGroupSelection";
import { ethnicGroups } from "@/utils/data/ethnicGroups";
import Providers from "@/utils/providers";

describe("EthnicGroupsSectionContainer", () => {
  const setFieldMock = jest.fn();

  const renderComponent = () =>
    render(
      <Providers>
        <EthnicGroupsSectionContainer setField={setFieldMock} />
      </Providers>
    );

  beforeEach(() => {
    setFieldMock.mockClear();
  });

  function selectEthnicGroup(ethnicGroup: string, expectation: any[]) {
    const checkbox = screen.getByTestId(`ethnic-group-option-${ethnicGroup}`);
    fireEvent.press(checkbox);
    expect(setFieldMock).toHaveBeenCalledWith(expectation);
  }

  it("should select and deselect ethnic groups", () => {
    renderComponent();

    const ethnicGroup1 = ethnicGroups[1].title;
    const ethnicGroup2 = ethnicGroups[2].title;

    selectEthnicGroup(ethnicGroup1, [ethnicGroups[1]]);
    selectEthnicGroup(ethnicGroup2, [ethnicGroups[1], ethnicGroups[2]]);
    selectEthnicGroup(ethnicGroup1, [ethnicGroups[2]]);
  });

  it("when select prefer not say, others should be disabled", () => {
    renderComponent();

    const preferNotSay = ethnicGroups[0].title;
    const ethnicGroup1 = ethnicGroups[1].title;
    const ethnicGroup2 = ethnicGroups[2].title;

    selectEthnicGroup(preferNotSay, [ethnicGroups[0]]);
    selectEthnicGroup(ethnicGroup1, [ethnicGroups[0]]);
    selectEthnicGroup(ethnicGroup2, [ethnicGroups[0]]);
  });

  it("changing other will update state", () => {
    renderComponent();

    const otherInput = screen.getByTestId("ethnic-group-option-Other");
    fireEvent.changeText(otherInput, "Other");
    expect(setFieldMock).toHaveBeenCalledWith([
      {
        title: "Other",
        value: "Other",
        id: "ca4564ca-55fd-11ee-8c99-0242ac120002",
      },
    ]);
  });
});
