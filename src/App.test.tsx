import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

describe("App", () => {
  it("should render default component", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
