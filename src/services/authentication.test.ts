import { createEmailUser } from "./authentication";

const createUserWithEmailAndPassword = jest.fn();

jest.mock("firebase/app", () => ({
  auth: jest.fn(() => ({
    createUserWithEmailAndPassword,
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
});
