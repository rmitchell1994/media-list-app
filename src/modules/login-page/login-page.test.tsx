import React from "react";
import { mocked } from "ts-jest/utils";
import { useMutation } from "react-query";
import { act, fireEvent, render, screen } from "../../../test/test-utils";
import LoginPage from "./login-page";
import { BrowserRouter, Route } from "react-router-dom";

const useMutationTypeMock = {
  context: undefined,
  data: undefined,
  error: null,
  failureCount: 1,
  isIdle: false,
  isPaused: false,
  mutate: jest.fn(),
  mutateAsync: jest.fn(),
  reset: jest.fn(),
  variables: undefined,
};

jest.mock("react-query", () => ({
  ...jest.requireActual<{ module: "react-query" }>("react-query"),
  useMutation: jest.fn().mockReturnValue({
    mutate: jest.fn(),
  }),
}));

const reactQueryMocked = mocked(useMutation);
describe("Login Page", () => {
  it("should render form", () => {
    const { asFragment } = render(<LoginPage />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render loading component", () => {
    reactQueryMocked.mockReturnValue({
      isLoading: true,
      isError: false,
      isSuccess: false,
      status: "idle",
      ...useMutationTypeMock,
    });

    render(<LoginPage />);

    expect(screen.getByText("Loading...")).toBeTruthy();
  });

  it("should render success component", () => {
    reactQueryMocked.mockReturnValue({
      isLoading: false,
      isError: false,
      isSuccess: true,
      status: "idle",
      ...useMutationTypeMock,
    });

    render(
      <BrowserRouter>
        <LoginPage />
        <Route path="/games">Signed In Page</Route>
      </BrowserRouter>
    );

    expect(screen.getByText("Signed In Page")).toBeTruthy();
  });

  it("should render error message on sign up failure", () => {
    reactQueryMocked.mockReturnValue({
      isLoading: false,
      isError: true,
      isSuccess: false,
      status: "idle",
      ...useMutationTypeMock,
    });

    render(<LoginPage />);

    expect(screen.getByText("Error, please try again")).toBeTruthy();
  });

  it("should call mutate when submit selected", () => {
    reactQueryMocked.mockReturnValue({
      isLoading: false,
      isError: false,
      isSuccess: false,
      status: "idle",
      ...useMutationTypeMock,
    });

    render(<LoginPage />);

    act(() => {
      fireEvent.change(screen.getByLabelText("Email Address"), {
        target: { value: "email@email.co.uk" },
      });
      fireEvent.change(screen.getByLabelText("Password"), {
        target: { value: "password" },
      });
      fireEvent.click(screen.getByText("Submit"));
    });

    expect(useMutation).toHaveBeenCalled();
  });
});
