import React, { lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const HomePage = lazy(
  () =>
    import(/* webpackChunkName: "home-page" */ "../modules/home-page/home-page")
);

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
