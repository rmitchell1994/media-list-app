import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Redirect } from "react-router-dom";
import { UserInfo } from "../../../contracts/data/authentication";
import { createEmailUser } from "../../services/authentication";
import * as CSS from "./sign-up-page.styles";

const SignUpPage: FC = () => {
  const { register, handleSubmit } = useForm<UserInfo>();
  const {
    mutate: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation((data: UserInfo) => createEmailUser(data));

  const onSubmit = (data: UserInfo): void => {
    createUser(data);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isSuccess) {
    return <Redirect to="/games" />;
  }

  return (
    <CSS.Wrapper>
      {isError && (
        <div data-testid="error-message-sign-up">Error, please try again</div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email Address
          <input
            name="email"
            placeholder="Email Address"
            type="email"
            data-testid="email-sign-up"
            ref={register({ required: true })}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            placeholder="Password"
            type="password"
            data-testid="password-sign-up"
            ref={register({ required: true })}
          />
        </label>
        <button type="submit" data-testid="submit-sign-up">
          Submit
        </button>
      </form>
    </CSS.Wrapper>
  );
};

export default SignUpPage;
