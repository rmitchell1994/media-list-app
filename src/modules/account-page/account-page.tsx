import React, { FC, Fragment, useContext } from "react";
import { Redirect } from "react-router-dom";
import UpdateUser from "./update-user/update-user";
import DeleteAccount from "./delete-account/delete-account";
import { AccountPageContext } from "./account-page-provider";

const AccountPage: FC = () => {
  const { status } = useContext(AccountPageContext);

  if (status.isLoading) {
    return <p>Loading...</p>;
  }

  if (status.isAccountDeleted) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <div data-testid="account-page">
        {status.error && <p data-testid="update-user-error">Error</p>}
        {status.success && <p data-testid="update-user-success">Success</p>}
        <UpdateUser />
        <DeleteAccount />
      </div>
    </Fragment>
  );
};

export default AccountPage;
