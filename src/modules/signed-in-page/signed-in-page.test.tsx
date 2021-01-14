import React from "react";
import { render } from "../../../test/test-utils";
import SignedInPage from "./signed-in-page";

describe("Signed In Page", () => {
  it("should render component", () => {
    const { asFragment } = render(<SignedInPage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
