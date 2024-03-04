export class shoppingCartPage {
  get deleteProductButton() {
    return cy.get('[aria-label="Sepetten Çıkar"]');
  }
}

export default new shoppingCartPage();
