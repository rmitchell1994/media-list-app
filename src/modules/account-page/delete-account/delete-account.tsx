import React, { FC, useContext } from "react";
import { useMutation } from "react-query";
import { deleteUser } from "../../../services/authentication";
import { AccountPageContext } from "../account-page-provider";
import {
  ACCOUNT_UPDATE_DELETE,
  ACCOUNT_UPDATE_ERROR,
  ACCOUNT_UPDATE_REQUEST,
} from "../account-page-reducer";

const DeleteAccount: FC = () => {
  const { dispatch } = useContext(AccountPageContext);

  const { mutate } = useMutation(deleteUser, {
    onMutate: () => dispatch({ type: ACCOUNT_UPDATE_REQUEST }),
    onError: () => dispatch({ type: ACCOUNT_UPDATE_ERROR }),
    onSuccess: () => dispatch({ type: ACCOUNT_UPDATE_DELETE }),
  });

  return (
    <a data-testid="delete-account-button" onClick={() => mutate()}>
      Delete Account
    </a>
  );
};

export default DeleteAccount;
