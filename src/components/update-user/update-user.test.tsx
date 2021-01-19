import React from "react";
import { mocked } from "ts-jest/utils";
import { useMutation } from "react-query";
import { act, fireEvent, render, screen } from "../../../test/test-utils";
import UpdateUser from "./update-user";

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
  isError: false,
};

jest.mock("react-query", () => ({
  ...jest.requireActual<{ module: "react-query" }>("react-query"),
  useMutation: jest.fn().mockReturnValue({
    mutate: jest.fn(),
  }),
}));

const reactQueryMocked = mocked(useMutation);
describe("Update User Component", () => {
  it("should render form", () => {
    const { asFragment } = render(<UpdateUser />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render loading component", () => {
    reactQueryMocked.mockReturnValue({
      isLoading: true,
      isSuccess: false,
      status: "idle",
      ...useMutationTypeMock,
    });

    render(<UpdateUser />);

    expect(screen.getByText("Loading...")).toBeTruthy();
  });

  it("should render success message", () => {
    reactQueryMocked.mockReturnValue({
      isLoading: false,
      isSuccess: true,
      status: "idle",
      ...useMutationTypeMock,
    });

    render(<UpdateUser />);

    expect(screen.getByText("Success")).toBeTruthy();
  });

  it("should call mutate when submit selected", () => {
    reactQueryMocked.mockReturnValue({
      isLoading: false,
      isSuccess: false,
      status: "idle",
      ...useMutationTypeMock,
    });

    render(<UpdateUser />);

    act(() => {
      fireEvent.change(screen.getByLabelText("Update Password"), {
        target: { value: "password" },
      });
      fireEvent.click(screen.getByText("Submit"));
    });

    expect(useMutation).toHaveBeenCalled();
  });
});
