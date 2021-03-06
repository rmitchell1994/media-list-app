import React, { FC, Fragment, useContext } from "react";
import UpdateUser from "./update-user/update-user";
import DeleteAccount from "./delete-account/delete-account";
import { AccountPageContext } from "./account-page-provider";
import { SignedInContext } from "../../context/signed-in-provider";
import { Redirect, withRouter } from "react-router-dom";

const AccountPage: FC = () => {
  const { status } = useContext(AccountPageContext);
  const isSignedIn = useContext(SignedInContext);

  if (!isSignedIn) {
    return <Redirect to="/" />;
  }

  if (status.isLoading) {
    return <p>Loading...</p>;
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

export default withRouter(AccountPage);
