import React from "react";
import Header from "./header";
import { render } from "../../../../test/test-utils";

describe("Header Component", () => {
  it("should render default component", () => {
    const { baseElement } = render(<Header />);

    expect(baseElement).toMatchSnapshot();
  });
});
