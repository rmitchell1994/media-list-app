import {
  UpdateAccountAction,
  UpdateAccountState,
} from "../../../contracts/data/authentication";

export const ACCOUNT_UPDATE_SUCCESS = "ACCOUNT_UPDATE_SUCCESS";
export const ACCOUNT_UPDATE_ERROR = "ACCOUNT_UPDATE_ERROR";
export const ACCOUNT_UPDATE_REQUEST = "ACCOUNT_UPDATE_REQUEST";

export const initialState: UpdateAccountState = {
  error: false,
  success: false,
  isLoading: false,
};

export const accountPageReducer = (
  state: UpdateAccountState = initialState,
  action: UpdateAccountAction
): UpdateAccountState => {
  switch (action.type) {
    case ACCOUNT_UPDATE_SUCCESS:
      return { ...initialState, success: true };
    case ACCOUNT_UPDATE_ERROR:
      return { ...initialState, error: true };
    case ACCOUNT_UPDATE_REQUEST:
      return { ...initialState, isLoading: true };
    default:
      return state;
  }
};
