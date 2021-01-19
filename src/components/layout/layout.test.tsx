import React from "react";
import Layout from "./layout";
import { render } from "../../../test/test-utils";

describe("Footer Component", () => {
  it("should render default component", () => {
    const { baseElement } = render(<Layout>Test</Layout>);

    expect(baseElement).toMatchSnapshot();
  });
});
