export class loginPage {
  get usernameField() {
    cy.wait(5000);
    return cy.get("#txtUserName");
  }

  get loginBtnUsername() {
    cy.wait(5000);
    return cy.get("#btnLogin");
  }

  get passwordField() {
    cy.wait(5000);
    return cy.get("#txtPassword");
  }

  get loginBtnPassword() {
    cy.wait(5000);
    return cy.get("#btnEmailSelect");
  }
}

export default new loginPage();
