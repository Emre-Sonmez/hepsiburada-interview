export class shoppingCartPage {
  deleteButton() {
    cy.url().should("contains", "https://checkout.hepsiburada.com/sepetim");
    cy.wait(5000);
    cy.get('a[aria-label="Sepetten Çıkar"]')
      .should("be.visible")
      .click({ force: true });
    cy.contains("Ürün sepetinizden kaldırıldı").should("be.visible");
    cy.wait(5000);
  }
}
