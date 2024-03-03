import loginPage from "../pageObjectModel/loginPage";

Cypress.Commands.add("login", (username, password) => {
  loginPage.usernameField.type(username);
  loginPage.loginBtnUsername.click();
  loginPage.passwordField.type(password);
  loginPage.loginBtnPassword.click();
});
