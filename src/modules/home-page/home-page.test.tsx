import React, { useContext } from "react";
import { mocked } from "ts-jest/utils";
import { render, screen } from "../../../test/test-utils";
import HomePage from "./home-page";
jest.mock("react", () => {
  return {
    ...jest.requireActual<{ moduleName: "react" }>("react"),
    useContext: jest.fn(),
  };
});

const useContextMocked = mocked(useContext);
describe("Home Page", () => {
  it("should render prospect page", () => {
    useContextMocked.mockReturnValue(null);
    render(<HomePage />);

    expect(screen.getByText("Prospect Page")).toBeTruthy();
  });

  it("should render signed in page", () => {
    useContextMocked.mockReturnValue(true);
    render(<HomePage />);

    expect(screen.getByText("Signed In Page")).toBeTruthy();
  });
});
