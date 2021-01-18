import { Then, When, Given } from "cypress-cucumber-preprocessor/steps";
import faker from "faker";

When("I enter my email address and {string} password", (type) => {
  const password = type === "valid" ? faker.internet.password() : "pass";
  cy.get("[data-testid=email-sign-up]").type(faker.internet.email());
  cy.get("[data-testid=password-sign-up]").type(password);
  cy.get("[data-testid=submit-sign-up]").click();
});

Then("I should see the {string} message", (message) => {
  cy.get(`[data-testid="home-page-wrapper"]`).should("contain", message);
});

Then("I should see a {string} Error message", (page) => {
  cy.get(`[data-testid=error-message-${page}]`).should(
    "contain",
    "Error, please try again"
  );
});

Then("I enter my login details", () => {
  cy.get("@userEmail").then((email) => {
    cy.get("[data-testid=email-login]").type(email);
  });

  cy.get("@userPassword").then((password) => {
    cy.get("[data-testid=password-login]").type(password);
  });

  cy.get("[data-testid=submit-login]").click();
});

Then("I enter the incorrect login details", () => {
  cy.get("[data-testid=email-login]").type("email@test.uk");

  cy.get("[data-testid=password-login]").type("password");

  cy.get("[data-testid=submit-login]").click();
});

Then("I click the logout button", () => {
  cy.get("[data-testid=logout-button]").click();
});
