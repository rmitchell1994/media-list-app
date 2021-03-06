import React, { FC, Fragment, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./private-route";

const ProspectPage = lazy(
  () =>
    import(
      /* webpackChunkName: "prospect-page") */ "../prospect-page/prospect-page"
    )
);

const SignedInPage = lazy(
  () =>
    import(
      /* webpackChunkName: "signed-in-page" */ "../signed-in-page/signed-in-page"
    )
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
    <Fragment>
      <PrivateRoute component={SignedInPage} path="/games" exact />
      <Route path="/sign-up" component={SignUpPage} />
      <Route path="/login" component={LoginPage} />
      <PrivateRoute component={AccountPage} path="/account" exact />
      <Route exact path="/" component={ProspectPage} />
    </Fragment>
  );
};

export default Routes;
