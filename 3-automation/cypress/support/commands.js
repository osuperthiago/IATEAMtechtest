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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
    const timeout = { timeout: options?.timeout || Cypress.config('pageLoadTimeout') }
    Cypress.log({ name: 'visit', message: url })
  
    cy.request({ url, followRedirect: false, method: 'HEAD', log: false })
      .then(timeout, resp => {
        if ([301].includes(resp.status)) {
          url = resp.headers['location']
          Cypress.log({ name: 'visit', displayName: ' ', message: 'redirected to ' + url })
        }
        return originalFn(url, Object.assign({}, options, { log: false }))
    })  
});



Cypress.Commands.add('searchCellPhone', (cellPhone) => {
  //cy.get(selector).invoke("removeAttr","target").click();
  cy.get("#sb1_text").type(cellPhone);
  cy.get('.autocomplete-short').click();
})

Cypress.Commands.add('visitAndCompare', () => {
  //cy.get(selector).invoke("removeAttr","target").click();
  cy.visit("https://www.tudocelular.com/");
  cy.contains("Compare").click();
})