import React, { FC, Fragment, lazy } from "react";
import { Route, Switch } from "react-router-dom";

const HomePage = lazy(
  () => import(/* webpackChunkName: "home-page" */ "../home-page/home-page")
);

const SignUpPage = lazy(
  () =>
    import(
      /* webpackChunkName: "sign-up-page" */ "../sign-up-page/sign-up-page"
    )
);

const LoginPage = lazy(
  () => import(/* webpackChunkName: "login-page" */ "../login-page/login-page")
);

const AccountPage = lazy(
  () => import(/* webpackChunkName: "account-page" */ "../account-page")
);

const Routes: FC = () => {
  return (
    <Switch>
      <Fragment>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/sign-up">
          <SignUpPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/account">
          <AccountPage />
        </Route>
      </Fragment>
    </Switch>
  );
};

export default Routes;
