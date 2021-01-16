import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Redirect } from "react-router-dom";
import { UserCreation } from "../../../contracts/data/authentication";
import { createEmailUser } from "../../services/authentication";
import * as CSS from "./sign-up-page.styles";

const SignUpPage: FC = () => {
  const { register, handleSubmit } = useForm<UserCreation>();
  const {
    mutate: createUser,
    isLoading,
    isError,
    isSuccess,
  } = useMutation((data: UserCreation) => createEmailUser(data));

  const onSubmit = (data: UserCreation): void => {
    createUser(data);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isSuccess) {
    return <Redirect to="/" />;
  }

  return (
    <CSS.Wrapper>
      {isError && <div>Error, please try again</div>}
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
        <button type="submit">Submit</button>
      </form>
    </CSS.Wrapper>
  );
};

export default SignUpPage;
