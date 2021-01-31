import React, { FC, useContext } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { UserPassword } from "../../../../contracts/data/authentication";
import { updateUserPassword } from "../../../services/authentication";
import { AccountPageContext } from "../account-page-provider";
import {
  ACCOUNT_UPDATE_ERROR,
  ACCOUNT_UPDATE_REQUEST,
  ACCOUNT_UPDATE_SUCCESS,
} from "../account-page-reducer";

const UpdateUser: FC = () => {
  const { dispatch } = useContext(AccountPageContext);
  const { register, handleSubmit } = useForm<UserPassword>();

  const { mutate } = useMutation(updateUserPassword, {
    onMutate: () => dispatch({ type: ACCOUNT_UPDATE_REQUEST }),
    onError: () => dispatch({ type: ACCOUNT_UPDATE_ERROR }),
    onSuccess: () => dispatch({ type: ACCOUNT_UPDATE_SUCCESS }),
  });

  const onSubmit = ({ password }: UserPassword): void => {
    mutate(password);
  };

  return (
    <div data-testid="update-user">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Update Password
          <input
            type="password"
            placeholder="New Password"
            name="password"
            data-testid="update-password-input"
            ref={register({ required: true })}
          />
        </label>
        <button type="submit" data-testid="update-password-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
