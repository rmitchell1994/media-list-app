import { createEmailUser, signInUser } from "./authentication";

const createUserWithEmailAndPassword = jest.fn();
const signInWithEmailAndPassword = jest.fn();

jest.mock("firebase/app", () => ({
  auth: jest.fn(() => ({
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
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
});
