import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I visit the {string} page", (page) => {
  cy.visit(page);
});
