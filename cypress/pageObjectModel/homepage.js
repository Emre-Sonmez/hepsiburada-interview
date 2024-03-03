export class homepage {
  navigate() {
    cy.visit(
      "https://www.google.com/url?sa=D&q=https://www.hepsiburada.com/kampanyalar/yurt-disindan-urunler%3Fwt_int%3Dhytop.yurtdisi.kampanya&ust=1709380440000000&usg=AOvVaw1JyjtbUOMEqMG-A2vz6wx4&hl=tr&source=gmail"
    );
    return this;
  }

  urlRedirectControl() {
    cy.get('[href="https://www.hepsiburada.com/kampanyalar/yurt-disindan-urunler?wt_int=hytop.yurtdisi.kampanya"]').should('be.visible').then((element) => {
        if (element.length > 0) {
            cy.wrap(element).click();
        } else {
            cy.log("No element found");
        }
    });
  }

  goLoginPage() {
    cy.wait(3000);
    cy.get("#myAccount").realHover("mouse");
    cy.get("#login").click({ force: true });
    cy.wait(3000);
  }
}
