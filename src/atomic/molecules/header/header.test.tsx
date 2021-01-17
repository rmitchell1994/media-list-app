import React, { FC, useContext } from "react";
import firebase from "firebase";
import Header from "./header";
import { render, screen } from "../../../../test/test-utils";
import { SignedInContext } from "../../../context/signed-in-provider";

const RenderHeader: FC<{ user: firebase.UserInfo | null }> = ({ user }) => (
  <SignedInContext.Provider value={user}>
    <Header />
  </SignedInContext.Provider>
);

describe("Header Component", () => {
  it("should render default component with logout link", () => {
    const { asFragment } = render(
      <RenderHeader
        user={{
          displayName: "name",
          email: "email",
          phoneNumber: null,
          photoURL: null,
          providerId: "provider",
          uid: "uid",
        }}
      />
    );

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText("Log Out")).toBeTruthy();
  });

  it("should render login link", () => {
    render(<RenderHeader user={null} />);

    expect(screen.getByText("Login")).toBeTruthy();
  });
});
