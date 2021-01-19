import React, { Fragment, useContext } from "react";
import { SignedInContext } from "../../context/signed-in-provider";
import * as CSS from "./header.styles";
import LogoutButton from "../logout-button/logout-button";

const Header: React.FC = () => {
  const isUserLoggedIn = useContext(SignedInContext);

  return (
    <CSS.Header>
      <CSS.HeaderIcon />
      <CSS.HeaderText>Media App Header</CSS.HeaderText>

      {isUserLoggedIn ? (
        <Fragment>
          <CSS.HeaderLink to="/account">Account</CSS.HeaderLink>
          <LogoutButton />
        </Fragment>
      ) : (
        <CSS.HeaderLink to="/login">Login</CSS.HeaderLink>
      )}
    </CSS.Header>
  );
};

export default Header;
