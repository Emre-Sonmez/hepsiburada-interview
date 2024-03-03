export class loginPage {
    get usernameField() {
        return cy.get('#txtUserName')
    }

    get loginBtnUsername() {
        return cy.get('#btnLogin')
    }

    get passwordField() {
        return cy.get('#txtPassword')
    }

    get loginBtnPassword() {
        return cy.get('#btnEmailSelect')
    }
}

export default new loginPage()