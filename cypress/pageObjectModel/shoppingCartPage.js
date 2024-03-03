export class shoppingCartPage {
  deleteButton() {
    cy.get(".delete_button_1lHhf").should("be.visible").click({ force: true });
    cy.wait(5000);
  }
}
