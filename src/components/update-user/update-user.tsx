import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { updateUserPassword } from "../../services/authentication";

const UpdateUser: FC = () => {
  const { register, handleSubmit } = useForm<{ password: string }>();
  const { mutate, isLoading, isSuccess } = useMutation((password: string) =>
    updateUserPassword(password)
  );

  const onSubmit = ({ password }: { password: string }): void => {
    mutate(password);
  };

  if (isLoading) {
    return <div data-testid="update-user-loading">Loading...</div>;
  }

  return (
    <div data-testid="update-user">
      {isSuccess && <div data-testid="update-user-success">Success </div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Update Password
          <input
            type="password"
            placeholder="New Password"
            name="password"
            data-testid="update-password-input"
            ref={register({ required: true })}
          />
        </label>
        <button type="submit" data-testid="update-password-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
