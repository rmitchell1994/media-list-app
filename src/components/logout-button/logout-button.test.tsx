import React from "react";
import { useMutation } from "react-query";
import { act, fireEvent, render, screen } from "../../../test/test-utils";
import LogoutButton from "./logout-button";

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
