import React from "react";
import Home from "./home";
import { render } from "@testing-library/react";

describe("Home", () => {
  it("should render default component", () => {
    const { asFragment } = render(<Home />);

    expect(asFragment()).toMatchSnapshot();
  });
});
