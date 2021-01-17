import React, { useContext } from "react";
import { SignedInContext } from "../../../context/signed-in-provider";
import * as CSS from "./header.styles";

const Header: React.FC = () => {
  const isUserLoggedIn = useContext(SignedInContext);

  return (
    <CSS.Header>
      <CSS.HeaderIcon />
      <CSS.HeaderText>Media App Header</CSS.HeaderText>
      {isUserLoggedIn ? (
        <CSS.HeaderLink to="/account">Log Out</CSS.HeaderLink>
      ) : (
        <CSS.HeaderLink to="/login">Login</CSS.HeaderLink>
      )}
    </CSS.Header>
  );
};

export default Header;
