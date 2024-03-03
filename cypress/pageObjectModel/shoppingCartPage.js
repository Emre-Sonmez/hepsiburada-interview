export class shoppingCartPage {
  deleteButton() {
    cy.wait(5000);
    cy.get(".delete_button_1lHhf").click({ force: true });
    cy.wait(5000);
  }
}
