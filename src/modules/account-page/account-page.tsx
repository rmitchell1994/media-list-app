import React, { FC, Fragment, useContext } from "react";
import UpdateUser from "./update-user/update-user";
import DeleteAccount from "./delete-account/delete-account";
import { AccountPageContext } from "./account-page-provider";

const AccountPage: FC = () => {
  const { status } = useContext(AccountPageContext);

  if (status.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <div data-testid="account-page">
        {status.error && <p>Error</p>}
        {status.success && <p>Success</p>}
        <UpdateUser />
        <DeleteAccount />
      </div>
    </Fragment>
  );
};

export default AccountPage;
