export class homepage {
  get girisYapVeyaUyeOlButton() {
    return cy.get("#myAccount");
  }

  get girisYapButton() {
    return cy.get("#login");
  }

  get goShoppingCartPage() {
    return cy.get("#shoppingCart");
  }

  get sepeteEkleButton() {
    return cy.contains("Sepete ekle");
  }
}

export default new homepage();
