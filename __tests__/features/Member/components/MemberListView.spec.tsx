import React from "react";

import { fireEvent, render, screen } from "@/__mocks__/test-utils";
import MemberListView from "@/features/Connect/components/MemberListView";

const mockItems = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];
const mockRenderComponent = jest.fn((item) => <div>{item.name}</div>);
const mockLoadMore = jest.fn();

describe("MemberListView", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should not render 'Show More' button if hasShowMoreButton is false", () => {
    render(
      <MemberListView
        items={mockItems}
        renderComponent={mockRenderComponent}
        loadMore={mockLoadMore}
        isLastPage={false}
        hasShowMoreButton={false}
      />
    );
    expect(screen.queryByText("Show More")).toBeNull();
  });

  it("should render 'Show More' button if hasShowMoreButton is true and isLastPage is false", () => {
    render(
      <MemberListView
        items={mockItems}
        renderComponent={mockRenderComponent}
        loadMore={mockLoadMore}
        isLastPage={false}
        hasShowMoreButton={true}
      />
    );
    expect(screen.getByText("Show More")).not.toBeNull();
  });

  it("should not render 'Show More' button if isLastPage is true", () => {
    render(
      <MemberListView
        items={mockItems}
        renderComponent={mockRenderComponent}
        loadMore={mockLoadMore}
        isLastPage={true}
        hasShowMoreButton={true}
      />
    );
    expect(screen.queryByText("Show More")).toBeNull();
  });

  it("should call loadMore when 'Show More' button is clicked", () => {
    render(
      <MemberListView
        items={mockItems}
        renderComponent={mockRenderComponent}
        loadMore={mockLoadMore}
        isLastPage={false}
        hasShowMoreButton={true}
      />
    );
    fireEvent.press(screen.getByText("Show More"));
    expect(mockLoadMore).toHaveBeenCalledTimes(1);
  });
});
