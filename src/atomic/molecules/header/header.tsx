import React from "react";
import * as CSS from "./header.styles";

const Header: React.FC = () => {
  return (
    <CSS.Header>
      <CSS.HeaderIcon />
      <CSS.HeaderText>Media App Header</CSS.HeaderText>
      <CSS.HeaderLink to="/sign-up">Create Account</CSS.HeaderLink>
    </CSS.Header>
  );
};

export default Header;
