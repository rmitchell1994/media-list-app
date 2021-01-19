import React from "react";
import { render } from "../../../test/test-utils";
import AccountPage from "./account-page";

describe("Account Page", () => {
  it("should render default component", () => {
    const { asFragment } = render(<AccountPage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
