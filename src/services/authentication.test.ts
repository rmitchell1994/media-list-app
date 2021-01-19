import {
  createEmailUser,
  deleteUser,
  signInUser,
  signOut,
  updateUserPassword,
} from "./authentication";

const createUserWithEmailAndPassword = jest.fn();
const signInWithEmailAndPassword = jest.fn();
const signOutUser = jest.fn();
const updatePassword = jest.fn();
const userDelete = jest.fn();

jest.mock("firebase/app", () => ({
  auth: jest.fn(() => ({
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut: signOutUser,
    currentUser: {
      updatePassword,
      delete: userDelete,
    },
  })),
}));

describe("Authentication", () => {
  describe("createEmailUser", () => {
    it("should be called with email and password", async () => {
      await createEmailUser({ email: "email", password: "password" });

      expect(createUserWithEmailAndPassword).toHaveBeenCalled();
      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
        "email",
        "password"
      );
    });
  });

  describe("signInWithEmailAndPassword", () => {
    it("should be called with email and password", async () => {
      await signInUser({ email: "email", password: "password" });

      expect(signInWithEmailAndPassword).toHaveBeenCalled();
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        "email",
        "password"
      );
    });
  });

  describe("signOut", () => {
    it("should call signOut function", async () => {
      await signOut();

      expect(signOutUser).toHaveBeenCalled();
    });
  });

  describe("updateUserPassword", () => {
    it("should call updatePassword", async () => {
      await updateUserPassword("password");

      expect(updatePassword).toHaveBeenCalled();
      expect(updatePassword).toHaveBeenCalledWith("password");
    });
  });

  describe("deleteUser", () => {
    it("should call deleteUser", async () => {
      await deleteUser();

      expect(userDelete).toHaveBeenCalledWith();
    });
  });
});
