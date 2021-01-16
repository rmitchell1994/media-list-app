import React, { useContext, FC } from "react";
import SignedInProvider, { SignedInContext } from "./signed-in-provider";
import { screen, render } from "../../test/test-utils";

const onAuthStateChanged = jest.fn();

jest.mock("firebase", () => ({
  auth: jest.fn(() => ({
    onAuthStateChanged,
  })),
}));

describe("Signed In Context Provider", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  const TestComponent: FC = () => {
    useContext(SignedInContext);

    return <div />;
  };

  it("should display uid from signed in context", () => {
    render(
      <SignedInProvider>
        <TestComponent />
      </SignedInProvider>
    );

    expect(onAuthStateChanged).toHaveBeenCalled();
  });
});
