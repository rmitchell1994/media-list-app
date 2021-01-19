import React from "react";
import DeleteAccount from "./delete-account";
import { act, fireEvent, render, screen } from "../../../test/test-utils";
import { useMutation } from "react-query";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { mocked } from "ts-jest/utils";

jest.mock("react-query", () => ({
  ...jest.requireActual<{ module: "react-query" }>("react-query"),
  useMutation: jest.fn().mockReturnValue({
    mutate: jest.fn(),
  }),
}));

const reactQueryMocked = mocked(useMutation);

describe("Delete Button Component", () => {
  it("should render delete button", () => {
    const { asFragment } = render(<DeleteAccount />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should call useMutation on click", () => {
    render(<DeleteAccount />);

    fireEvent.click(screen.getByText("Delete Account"));

    expect(useMutation).toHaveBeenCalled();
  });

  it("should redirect on success", () => {
    reactQueryMocked.mockReturnValue({
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
      isError: false,
      isLoading: false,
      isSuccess: false,
      status: "idle",
    });

    render(
      <Router>
        <DeleteAccount />
        <Route path="/">Success</Route>
      </Router>
    );

    expect(screen.getByText("Success")).toBeTruthy();
  });
});
