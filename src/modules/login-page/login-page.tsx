import React, { FC, useContext } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Redirect } from "react-router-dom";
import { SignedInContext } from "src/context/signed-in-provider";
import { UserInfo } from "../../../contracts/data/authentication";
import { signInUser } from "../../services/authentication";
import * as CSS from "./login-page.styles";

const SignUpPage: FC = () => {
  const { register, handleSubmit } = useForm<UserInfo>();
  const isSignedIn = useContext(SignedInContext);
  const {
    mutate: userSignIn,
    isLoading,
    isError,
    isSuccess,
  } = useMutation((data: UserInfo) => signInUser(data));

  const onSubmit = (data: UserInfo): void => {
    userSignIn(data);
  };

  if (isSignedIn) {
    return <Redirect to="/games" />;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isSuccess) {
    return <Redirect to="/games" />;
  }

  return (
    <CSS.Wrapper>
      {isError && (
        <div data-testid="error-message-login">Error, please try again</div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email Address
          <input
            name="email"
            placeholder="Email Address"
            type="email"
            data-testid="email-login"
            ref={register({ required: true })}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            placeholder="Password"
            type="password"
            data-testid="password-login"
            ref={register({ required: true })}
          />
        </label>
        <button type="submit" data-testid="submit-login">
          Submit
        </button>
      </form>
      <CSS.SignupLink to="/sign-up">Create Account</CSS.SignupLink>
    </CSS.Wrapper>
  );
};

export default SignUpPage;
