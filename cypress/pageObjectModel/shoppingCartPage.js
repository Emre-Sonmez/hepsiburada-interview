export class shoppingCartPage {
  deleteButton() {
    cy.url().should("contains", "https://checkout.hepsiburada.com/sepetim");
    cy.wait(5000);
    cy.get('a[aria-label="Sepetten Çıkar"]')
      .should("be.visible")
      .click({ force: true });

    cy.get('[kind="secondary"]').then(($element) => {
      if ($element.length > 0) {
        // Element bulundu, tıkla
        cy.wrap($element).click();
      } else {
        // Element bulunamadı, testi fail etme
        cy.log("Element not found, skipping click action");
      }
    });

    cy.wait(5000);
    cy.contains("Ürün sepetinizden kaldırıldı").should("be.visible");
  }
}
