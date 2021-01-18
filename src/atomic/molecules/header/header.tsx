import React, { useContext } from "react";
import { SignedInContext } from "../../../context/signed-in-provider";
import * as CSS from "./header.styles";
import LogoutButton from "../../atoms/logout-button/logout-button";

const Header: React.FC = () => {
  const isUserLoggedIn = useContext(SignedInContext);

  return (
    <CSS.Header>
      <CSS.HeaderIcon />
      <CSS.HeaderText>Media App Header</CSS.HeaderText>
      {isUserLoggedIn ? (
        <LogoutButton />
      ) : (
        <CSS.HeaderLink to="/login">Login</CSS.HeaderLink>
      )}
    </CSS.Header>
  );
};

export default Header;
