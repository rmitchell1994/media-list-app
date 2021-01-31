import React from "react";
import { useMutation } from "react-query";
import { act, fireEvent, render, screen } from "../../../../test/test-utils";
import UpdateUser from "./update-user";
import { AccountPageContext } from "../account-page-provider";
import { updateUserPassword } from "../../../services/authentication";

jest.mock("../../../services/authentication", () => ({
  updateUserPassword: jest.fn().mockResolvedValue(() => Promise.resolve()),
}));

jest.mock("react-query", () => ({
  ...jest.requireActual<{ moduleName: "react-query" }>("react-query"),
  useMutation: jest.fn().mockReturnValue({
    mutate: jest.fn(),
  }),
}));

describe("Update User Component", () => {
  const dispatch = jest.fn();
  const status = {
    isLoading: false,
    error: false,
    success: false,
  };

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it("should render form", () => {
    const { asFragment } = render(
      <AccountPageContext.Provider value={{ dispatch, status }}>
        <UpdateUser />
      </AccountPageContext.Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should call useMutation and update user password", () => {
    render(
      <AccountPageContext.Provider value={{ dispatch, status }}>
        <UpdateUser />
      </AccountPageContext.Provider>
    );

    act(() => {
      fireEvent.change(screen.getByLabelText("Update Password"), {
        target: { value: "password" },
      });
      fireEvent.click(screen.getByText("Submit"));
    });

    expect(useMutation).toHaveBeenCalled();
    expect(useMutation).toHaveBeenCalledWith(updateUserPassword, {
      onMutate: expect.any(Function),
      onError: expect.any(Function),
      onSuccess: expect.any(Function),
    });
  });
});
