/// <reference types="cypress" />
import "cypress-real-events/support";

describe("Search Pet Shop", () => {
  beforeEach(() => {
    cy.visit(
      "https://www.google.com/url?sa=D&q=https://www.hepsiburada.com/kampanyalar/yurt-disindan-urunler%3Fwt_int%3Dhytop.yurtdisi.kampanya&ust=1709380440000000&usg=AOvVaw1JyjtbUOMEqMG-A2vz6wx4&hl=tr&source=gmail",
      { failOnStatusCode: false }
    );
    cy.wait(10000);
    cy.get("#myAccount").realHover("mouse");
    cy.get("#login").click({ force: true });
  });

  it("Test", () => {
    cy.wait(1000);
  });
});
