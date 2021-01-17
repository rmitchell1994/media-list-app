import { When } from "cypress-cucumber-preprocessor/steps";

When("I enter my email and address details", () => {
  cy.get("[data-testid=email-sign-up]").type("test@test.uk");
  cy.get("[data-testid=password-sign-up]").type("password");
  cy.get("[data-testid=submit-sign-up]").click();
});
