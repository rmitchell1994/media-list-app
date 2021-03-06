import {
  accountPageReducer,
  ACCOUNT_UPDATE_ERROR,
  ACCOUNT_UPDATE_REQUEST,
  ACCOUNT_UPDATE_SUCCESS,
  initialState,
} from "./account-page-reducer";

describe("Account Page Reducer", () => {
  const expectedState = {
    error: false,
    success: false,
    isLoading: false,
  };
  it("should return success true on ACCOUNT_UPDATE_SUCCESS action", () => {
    const state = accountPageReducer(initialState, {
      type: ACCOUNT_UPDATE_SUCCESS,
    });

    expect(state).toEqual({
      ...expectedState,
      success: true,
    });
  });

  it("should return error true on ACCOUNT_UPDATE_ERROR action", () => {
    const state = accountPageReducer(initialState, {
      type: ACCOUNT_UPDATE_ERROR,
    });

    expect(state).toEqual({
      ...expectedState,
      error: true,
    });
  });

  it("should return isLoading true on ACCOUNT_UPDATE_REQUEST action", () => {
    const state = accountPageReducer(initialState, {
      type: ACCOUNT_UPDATE_REQUEST,
    });

    expect(state).toEqual({
      ...expectedState,
      isLoading: true,
    });
  });
});
