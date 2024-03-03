export class shoppingCartPage {
  deleteButton() {
    cy.url().should("contains", "https://checkout.hepsiburada.com/sepetim");
    cy.wait(5000);
    cy.get('[aria-label="Sepetten Çıkar"]')
      .should("be.visible")
      .click({ force: true });

    cy.get('[kind="secondary"]')
      .if("visible")
      .then(() => {
        cy.get('[kind="secondary"]').click({ force: true });
      })
      .else()
      .log("No element found");

    cy.wait(5000);
    cy.contains("Ürün sepetinizden kaldırıldı").should("be.visible");
  }
}
