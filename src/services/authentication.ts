import firebase from "firebase/app";
import "firebase/auth";
import { UserCreation } from "../../contracts/data/authentication";

export const createEmailUser = async ({
  email,
  password,
}: UserCreation): Promise<firebase.auth.UserCredential> =>
  firebase.auth().createUserWithEmailAndPassword(email, password);
