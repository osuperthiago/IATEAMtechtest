/// <reference types="cypress" />

describe("Our first suite", () => {
  it("Compare 2 Smartphones' prices", () => {
    cy.visit("https://www.tudocelular.com/");
    cy.contains("Compare").click();
    cy.get("#sb1_text").type("Poco X5 Pro");
    cy.get('[data-name="Poco X5 Pro"]').click();
    cy.get("#sb1_text").type("Poco X3 NFC");
    cy.get('[data-name="Poco X3 NFC"]').click();
    cy.contains("Comparar").click();



    


    cy.get('a.bubble_costo') // Select all anchor elements with the class "bubble_costo"
    .each(($el) => { // Iterate over each element
      const hasAvisoClass = $el.hasClass('aviso'); // Check if it has the class "aviso"
      if (hasAvisoClass) {
        cy.log('Element has the class "aviso".');
      } else {
        cy.log('Element does not have the class "aviso".');
      }
    });
  


    // Code for index 1
    cy.get('a.bubble_costo.green strong').eq(0).then(($element) => {
        const text = $element.text();
        // This block will handle the first occurrence of the text "1.612"
        cy.log(`Para o Poco X5 Pro, o melhor valor é: ${text}`);
        // Perform any actions or assertions related to the first occurrence here
    });
  
  // Code for index 2
  cy.get('a.bubble_costo.green strong').eq(1).then(($element) => {
    const text = $element.text();
    // This block will handle the second occurrence of the text "1.612"
    cy.log(`Para o Redmi Note 11 Pro 5G, o melhor valor é: ${text}`);
    // Perform any actions or assertions related to the second occurrence here
  });




  });
});
