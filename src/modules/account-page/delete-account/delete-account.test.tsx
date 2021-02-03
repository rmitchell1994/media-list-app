import React from "react";
import DeleteAccount from "./delete-account";
import { fireEvent, render, screen } from "../../../../test/test-utils";
import { useMutation } from "react-query";
import { deleteUser } from "../../../services/authentication";

jest.mock("../../../services/authentication", () => ({
  deleteUser: jest.fn().mockResolvedValue(() => Promise.resolve()),
}));

jest.mock("react-query", () => ({
  ...jest.requireActual<{ module: "react-query" }>("react-query"),
  useMutation: jest.fn().mockReturnValue({
    mutate: jest.fn(),
  }),
}));

describe("Delete Button Component", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("should render delete button", () => {
    const { asFragment } = render(<DeleteAccount />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should call useMutation on click", () => {
    render(<DeleteAccount />);

    fireEvent.click(screen.getByText("Delete Account"));

    expect(useMutation).toHaveBeenCalled();
    expect(useMutation).toHaveBeenCalledWith(deleteUser, {
      onMutate: expect.any(Function),
      onError: expect.any(Function),
      onSuccess: expect.any(Function),
    });
  });
});
