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

// command para visitar a pagina e clicar em comparar
Cypress.Commands.add('visitAndCompare', () => {
  //cy.get(selector).invoke("removeAttr","target").click();
  cy.visit("https://www.tudocelular.com/");
  cy.contains("Compare").click();
})

// command procurar a entrada de nomes de celulares e clicar no nome que aparece
// delay pois meu pc as vezes ficava lento
Cypress.Commands.add('searchCellPhone', (cellPhone) => {
  cy.get("#sb1_text").type(cellPhone);
  cy.wait(1000)
  cy.get('.autocomplete-short').click();
  cy.wait(1000)
})

//verifica se ha disponibilidade pela classe aviso e, se houver,
//busca os preços de cada celular e imprime o melhor preço
Cypress.Commands.add('priceCheck', () => {
    cy.get('a.bubble_costo').each((cell, index) => {
      if (cell.hasClass('aviso')) {
        cy.log(`O celular ${index + 1} não está disponível`);
      } else {
        const text = cell.find('strong').text();
        cy.log(`O celular ${index + 1} tem melhor preço a R$ ${text}`);
      }
    })
})