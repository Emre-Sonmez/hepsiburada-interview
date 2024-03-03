export class loginPage {
  get usernameField() {
    cy.wait(5000);
    return cy
      .get("#txtUserName")
      .should("be.visible")
      .should(
        "have.attr",
        "placeholder",
        "E-posta adresi veya telefon numarası"
      );
  }

  get loginBtnUsername() {
    return cy
      .get("#btnLogin")
      .should("be.visible")
      .should("contain.text", "Giriş yap");
  }

  get passwordField() {
    return cy
      .get("#txtPassword")
      .should("be.visible")
      .should("have.attr", "placeholder", "Şifre");
  }

  get loginBtnPassword() {
    return cy
      .get("#btnEmailSelect")
      .should("be.visible")
      .should("contain.text", "Giriş yap");
  }
}

export default new loginPage();
