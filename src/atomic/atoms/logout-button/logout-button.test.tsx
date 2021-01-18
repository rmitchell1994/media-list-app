import React from "react";
import { mocked } from "ts-jest/utils";
import { useMutation } from "react-query";
import { act, fireEvent, render, screen } from "../../../../test/test-utils";
import LogoutButton from "./logout-button";

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

describe("Logout Button", () => {
  it("shoud render logout button", () => {
    const { asFragment } = render(<LogoutButton />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should call mutate on click", () => {
    render(<LogoutButton />);

    act(() => {
      fireEvent.click(screen.getByText("Log Out"));
    });

    expect(useMutation).toHaveBeenCalled();
  });
});
