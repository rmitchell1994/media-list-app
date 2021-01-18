import { Given } from "cypress-cucumber-preprocessor/steps";
import faker from "faker";

Given("I visit the {string} page", (page) => {
  cy.visit(page);
});

Given("I visit the {string} page as an existing user", (page) => {
  const emailAddress = faker.internet.email();
  const password = faker.internet.password();

  cy.wrap(emailAddress).as("userEmail");
  cy.wrap(password).as("userPassword");

  cy.createUser(emailAddress, password);
  cy.visit(page);
});

Given(`I visit the "home-page" as a signed in user`, () => {
  cy.signInUser(faker.internet.email(), faker.internet.password());
  cy.visit("");
});
