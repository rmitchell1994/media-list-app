import firebase from "firebase/app";
import "firebase/auth";
import { UserInfo } from "../../contracts/data/authentication";

export const createEmailUser = async ({
  email,
  password,
}: UserInfo): Promise<firebase.auth.UserCredential> =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

export const signInUser = async ({
  email,
  password,
}: UserInfo): Promise<firebase.auth.UserCredential> =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const signOut = async (): Promise<void> => firebase.auth().signOut();
