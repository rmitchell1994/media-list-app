import React, { useContext, FC } from "react";
import firebase from "firebase";
import SignedInProvider, { SignedInContext } from "./signed-in-provider";
import { screen, render } from "../../test/test-utils";

const userInfo: firebase.UserInfo = {
  displayName: "Test",
  email: "email@test.uk",
  phoneNumber: "0111111",
  photoURL: null,
  providerId: "email",
  uid: "uid",
};

jest.mock("firebase", () => ({
  auth: jest.fn(() => ({
    currentUser: userInfo,
  })),
}));

describe("Signed In Context Provider", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  const TestComponent: FC = () => {
    const isUserLoggedIn = useContext(SignedInContext);

    return <div>{isUserLoggedIn?.uid ?? null}</div>;
  };

  it("should display uid from signed in context", () => {
    render(
      <SignedInProvider>
        <TestComponent />
      </SignedInProvider>
    );

    expect(screen.getByText("uid")).toBeTruthy();
  });
});
