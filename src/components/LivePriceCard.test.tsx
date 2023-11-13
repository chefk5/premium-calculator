import React from "react";
import { fireEvent, render, screen } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import LivePriceCard from "./LivePriceCard";

describe("renders Products card", () => {
  it("displays the passed props with all detials", () => {
    const { getByText } = render(<LivePriceCard />);

    expect(getByText("Live Price")).toBeVisible();
  });
});
