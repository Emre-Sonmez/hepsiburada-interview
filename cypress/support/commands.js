import loginPage from "../pageObjectModel/loginPage";

Cypress.Commands.add("login", (username, password) => {
  loginPage.usernameField.type(username);
  loginPage.loginBtnUsername.click();
  loginPage.passwordField.type(password);
  loginPage.loginBtnPassword.click();
});

Cypress.Commands.add("urlRedirectControl", () => {
  cy.get(
    '[href="https://www.hepsiburada.com/kampanyalar/yurt-disindan-urunler?wt_int=hytop.yurtdisi.kampanya"]'
  )
    .if("visible")
    .then(() => {
      cy.get(
        '[href="https://www.hepsiburada.com/kampanyalar/yurt-disindan-urunler?wt_int=hytop.yurtdisi.kampanya"]'
      ).click({ force: true });
    })
    .else()
    .log("No element found");
});

Cypress.Commands.add("goProductsFromAbroadPage", () => {
  cy.get(
    'a[href="https://www.hepsiburada.com/kampanyalar/yurt-disindan-urunler?wt_int=hytop.yurtdisi.kampanya"]'
  )
    .should("be.visible")
    .click({ force: true });

  cy.url().should(
    "contains",
    "https://www.hepsiburada.com/kampanyalar/yurt-disindan-urunler"
  );
});


Cypress.Commands.add("deletePopupControl", () => {
      cy.get('[kind="secondary"]')
      .if("visible")
      .then(() => {
        cy.get('[kind="secondary"]').click({ force: true });
      })
      .else()
      .log("No element found");
});
