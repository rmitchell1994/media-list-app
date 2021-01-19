import React, { FC } from "react";
import { useMutation } from "react-query";
import { Redirect } from "react-router-dom";
import { deleteUser } from "../../services/authentication";

const DeleteAccount: FC = () => {
  const { mutate, isSuccess } = useMutation(deleteUser);

  if (isSuccess) {
    return <Redirect to="/" />;
  }
  return (
    <a data-testid="delete-account-button" onClick={() => mutate()}>
      Delete Account
    </a>
  );
};

export default DeleteAccount;
