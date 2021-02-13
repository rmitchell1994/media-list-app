// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("createUser", (email, password) => {
  cy.request(
    "POST",
    "http://localhost:9099/www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=apiKey",
    {
      email,
      password,
    }
  );
});

Cypress.Commands.add("signInUser", (email, password) => {
  cy.createUser(email, password);
  // cy.request(
  //   "POST",
  //   "http://localhost:9099/www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=apiKey)",
  //   { email, password }
  // );

  // cy.request(
  //   "POST",
  //   " http://localhost:9099/www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=apiKey"
  // );
  cy.visit("/login");

  cy.get(`[data-testid=email-login]`).type(email);
  cy.get(`[data-testid=password-login]`).type(password);
  cy.get(`[data-testid=submit-login]`).click();
});
