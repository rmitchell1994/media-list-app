import React from "react";
import { render } from "../../../test/test-utils";
import ProspectPage from "./prospect-page";

describe("Prospect Page", () => {
  it("should render component", () => {
    const { asFragment } = render(<ProspectPage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
