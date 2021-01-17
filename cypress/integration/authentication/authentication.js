import { Then, When } from "cypress-cucumber-preprocessor/steps";
import faker from "faker";

When("I enter my email address and {string} password", (type) => {
  const password = type === "valid" ? faker.internet.password() : "pass";
  cy.get("[data-testid=email-sign-up]").type(faker.internet.email());
  cy.get("[data-testid=password-sign-up]").type(password);
  cy.get("[data-testid=submit-sign-up]").click();
});

Then("I should see the {string} message", (message) => {
  cy.get(`[data-testid="signed-in-wrapper"]`).should("contain", message);
});

Then("I should see an Error message", () => {
  cy.get("[data-testid=error-message-sign-up]").should(
    "contain",
    "Error, please try again"
  );
});
