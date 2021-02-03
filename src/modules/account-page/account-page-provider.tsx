import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useReducer,
} from "react";
import {
  UpdateAccountState,
  UpdateAccountAction,
} from "../../../contracts/data/authentication";
import { accountPageReducer, initialState } from "./account-page-reducer";

type Props = {
  children: ReactNode;
};

export const AccountPageContext = createContext<{
  status: UpdateAccountState;
  dispatch: Dispatch<UpdateAccountAction>;
}>({ status: initialState, dispatch: () => null });

const AccountPageProvider: FC<Props> = ({ children }: Props) => {
  const [status, dispatch] = useReducer(accountPageReducer, initialState);

  return (
    <AccountPageContext.Provider value={{ dispatch, status }}>
      {children}
    </AccountPageContext.Provider>
  );
};

export default AccountPageProvider;
