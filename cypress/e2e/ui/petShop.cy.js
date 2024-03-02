/// <reference types="cypress" />
import "cypress-real-events/support";

describe("Pet Shop", () => {
  beforeEach(() => {
    cy.log("Test starts");
    cy.visit(
      "https://www.google.com/url?sa=D&q=https://www.hepsiburada.com/kampanyalar/yurt-disindan-urunler%3Fwt_int%3Dhytop.yurtdisi.kampanya&ust=1709380440000000&usg=AOvVaw1JyjtbUOMEqMG-A2vz6wx4&hl=tr&source=gmail"
    );
    cy.wait(10000);
    cy.get("#myAccount").realHover("mouse");
    cy.get("#login").click({ force: true });
    cy.wait(10000);
    cy.get('#txtUserName', {timeout:60000}).should('be.visible').type('hepsiburada.interview@gmail.com')
    cy.get('#btnLogin').should('be.visible').click()
    cy.get('#txtPassword').should('be.visible').type('Test123!*')
    cy.get('#btnEmailSelect').should('be.visible').click()
  });

  it("Add a pet shop product to cart and check", () => {
    cy.wait(1000);
  });
});
