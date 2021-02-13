import { Then, When } from "cypress-cucumber-preprocessor/steps";
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

Then("I enter {string} login details", (type) => {
  cy.get("@userEmail").then((email) => {
    cy.get("[data-testid=email-login]").type(
      type === "valid" ? email : "email@email.uk"
    );
  });

  cy.get("@userPassword").then((password) => {
    cy.get("[data-testid=password-login]").type(
      type === "valid" ? password : "test"
    );
  });

  cy.get("[data-testid=submit-login]").click();
});

Then("I click the logout button", () => {
  cy.get("[data-testid=logout-button]").click();
});

When("I type in an {string} password", (type) => {
  const password = type === "incorrect" ? "fail" : faker.internet.password();
  cy.get("[data-testid=update-password-input]").type(password);

  cy.get("[data-testid=update-password-submit]").click();
});

Then("I should see a {string} message", (message) => {
  cy.get(`[data-testid=update-user-${message.toLowerCase()}]`).should(
    "contain",
    message
  );
});

When("I select the delete account button", () => {
  cy.get("[data-testid=delete-account-button]").click();
});
