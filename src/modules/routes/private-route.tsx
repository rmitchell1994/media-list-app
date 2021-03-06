import React, { FC, LazyExoticComponent, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { SignedInContext } from "../../context/signed-in-provider";

type Props = {
  component: LazyExoticComponent<React.FC>;
  path: string;
  exact: boolean;
};
const PrivateRoute: FC<Props> = ({ component: Component, ...rest }: Props) => {
  const isSignedIn = useContext(SignedInContext);

  return (
    <Route
      {...rest}
      render={() => (isSignedIn ? <Component /> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
