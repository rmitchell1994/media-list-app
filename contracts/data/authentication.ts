export type UserPassword = {
  password: string;
};

export interface UserInfo extends UserPassword {
  email: string;
}

export type UpdateAccountState = {
  error: boolean;
  success: boolean;
  isLoading: boolean;
};

export type UpdateAccountAction = {
  type:
    | "ACCOUNT_UPDATE_SUCCESS"
    | "ACCOUNT_UPDATE_ERROR"
    | "ACCOUNT_UPDATE_REQUEST";
};
