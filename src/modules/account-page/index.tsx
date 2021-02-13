import React, { FC } from "react";
import AccountPageProvider from "./account-page-provider";
import AccountPage from "./account-page";

const AccountPageModule: FC = () => (
  <AccountPageProvider>
    <AccountPage />
  </AccountPageProvider>
);

export default AccountPageModule;
