import React from "react";
import Footer from "./footer";
import { render } from "../../../test/test-utils";

describe("Footer Component", () => {
  it("should render default component", () => {
    const { baseElement } = render(<Footer />);

    expect(baseElement).toMatchSnapshot();
  });
});
