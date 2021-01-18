import React, { FC, useContext } from "react";
import { SignedInContext } from "../../context/signed-in-provider";
import ProspectPage from "../prospect-page/prospect-page";
import SignedInPage from "../signed-in-page/signed-in-page";

const HomePage: FC = () => {
  const isUserLoggedIn = useContext(SignedInContext);

  return (
    <div data-testid="home-page-wrapper">
      {isUserLoggedIn ? <SignedInPage /> : <ProspectPage />}
    </div>
  );
};

export default HomePage;
