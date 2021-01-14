import React, {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useState,
} from "react";
import firebase from "firebase";

type Props = {
  children: ReactNode;
};

export const SignedInContext = createContext<firebase.UserInfo | null>(null);

const SignedInProvider: FC<Props> = ({ children }: Props) => {
  const [user, setUser] = useState<firebase.UserInfo | null>(null);

  useEffect(() => {
    const userInformation = firebase.auth().currentUser;
    setUser(userInformation);
  });

  return (
    <SignedInContext.Provider value={user}>{children}</SignedInContext.Provider>
  );
};

export default SignedInProvider;
