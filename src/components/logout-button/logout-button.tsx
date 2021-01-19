import React, { FC } from "react";
import { useMutation } from "react-query";
import { signOut } from "../../services/authentication";
import * as CSS from "./logout-button.styles";

const LogoutButton: FC = () => {
  const { mutate } = useMutation(signOut);

  return (
    <CSS.LogoutButtonLink data-testid="logout-button" onClick={() => mutate()}>
      Log Out
    </CSS.LogoutButtonLink>
  );
};

export default LogoutButton;
