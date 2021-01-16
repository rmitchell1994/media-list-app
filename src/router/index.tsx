import React, { FC, Fragment, lazy } from "react";
import { Route, Switch } from "react-router-dom";

const HomePage = lazy(
  () =>
    import(/* webpackChunkName: "home-page" */ "../modules/home-page/home-page")
);

const SignUpPage = lazy(
  () =>
    import(
      /* webpackChunkName: "sign-up-page" */ "../modules/sign-up-page/sign-up-page"
    )
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
      </Fragment>
    </Switch>
  );
};

export default Routes;
