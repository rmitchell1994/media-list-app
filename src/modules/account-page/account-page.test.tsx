import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render, screen } from "../../../test/test-utils";
import AccountPage from "./account-page";
import { AccountPageContext } from "./account-page-provider";

describe("Account Page", () => {
  const status = {
    error: false,
    success: false,
    isLoading: false,
    isAccountDeleted: false,
  };

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("should render default component", () => {
    const { asFragment } = render(
      <AccountPageContext.Provider
        value={{
          status,
          dispatch: jest.fn(),
        }}
      >
        <AccountPage />
      </AccountPageContext.Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render loading component", () => {
    render(
      <AccountPageContext.Provider
        value={{
          status: { ...status, isLoading: true },
          dispatch: jest.fn(),
        }}
      >
        <AccountPage />
      </AccountPageContext.Provider>
    );

    expect(screen.getByText("Loading...")).toBeTruthy();
  });
  it("should render success component and not error", () => {
    render(
      <AccountPageContext.Provider
        value={{
          status: { ...status, success: true },
          dispatch: jest.fn(),
        }}
      >
        <AccountPage />
      </AccountPageContext.Provider>
    );

    expect(screen.getByText("Success")).toBeTruthy();
    expect(screen.queryByText("Error")).toBeFalsy();
  });

  it("should render error component and not success", () => {
    render(
      <AccountPageContext.Provider
        value={{
          status: { ...status, error: true },
          dispatch: jest.fn(),
        }}
      >
        <AccountPage />
      </AccountPageContext.Provider>
    );

    expect(screen.getByText("Error")).toBeTruthy();
    expect(screen.queryByText("Success")).toBeFalsy();
  });

  it("should redirect on success", () => {
    render(
      <AccountPageContext.Provider
        value={{
          status: {
            isAccountDeleted: true,
            error: false,

            success: false,
            isLoading: false,
          },
          dispatch: jest.fn(),
        }}
      >
        <Router>
          <AccountPage />
          <Route path="/">Success</Route>
        </Router>
      </AccountPageContext.Provider>
    );

    expect(screen.getByText("Success")).toBeTruthy();
  });
});
