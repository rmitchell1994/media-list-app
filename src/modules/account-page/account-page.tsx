import React, { FC } from "react";
import UpdateUser from "../../components/update-user/update-user";
import DeleteAccount from "../../components/delete-account/delete-account";

const AccountPage: FC = () => {
  return (
    <div data-testid="account-page">
      <UpdateUser />
      <DeleteAccount />
    </div>
  );
};

export default AccountPage;
