import { Given } from "cypress-cucumber-preprocessor/steps";
import { createYield } from "typescript";

Given("I visit the {string} page", (page) => {
  cy.visit(page);
});
