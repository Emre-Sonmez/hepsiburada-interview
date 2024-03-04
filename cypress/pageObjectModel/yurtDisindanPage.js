export class yurtDisindanPage {

  get productCart() {
    return cy.get("[data-test-id='product-info-wrapper']");
  }



}

export default new yurtDisindanPage();
