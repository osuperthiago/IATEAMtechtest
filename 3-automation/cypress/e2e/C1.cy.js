/// <reference types="cypress" />

    it("Comparar 2 celulares e obter melhor preço de cada", () => {

    cy.visitAndCompare();
    cy.searchCellPhone("Samsung Galaxy M54");
    cy.searchCellPhone("Apple iPhone 14 Pro Max");
    cy.contains("Comparar").click();
    cy.priceCheck();

  });




    

  