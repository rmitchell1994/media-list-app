import React, {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useState,
} from "react";
import firebase from "firebase/app";
import "firebase/auth";

type Props = {
  children: ReactNode;
};

// type User = {
//   user:
//   isSignedIn: boolean;
// };

// export const SignedInContext = createContext<firebase.UserInfo | null;>({
//   user: null,
//   isSignedIn: false,
// });
export const SignedInContext = createContext<firebase.UserInfo | null>(null);

const SignedInProvider: FC<Props> = ({ children }: Props) => {
  const [user, setUser] = useState<firebase.UserInfo | null>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

  return (
    <SignedInContext.Provider value={user}>{children}</SignedInContext.Provider>
  );
};

export default SignedInProvider;
