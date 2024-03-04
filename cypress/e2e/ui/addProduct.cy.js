/// <reference types="cypress" />
import "cypress-real-events/support";
import homepage from "../../pageObjectModel/homepage";
import yurtDisindanPage from "../../pageObjectModel/yurtDisindanPage";
import shoppingCartPage from "../../pageObjectModel/shoppingCartPage";

describe("Add Product", () => {
  beforeEach(() => {
    cy.log("Test starts");
    cy.wait(3000);
    cy.visit(
      "https://www.google.com/url?sa=D&q=https://www.hepsiburada.com/kampanyalar/yurt-disindan-urunler%3Fwt_int%3Dhytop.yurtdisi.kampanya&ust=1709380440000000&usg=AOvVaw1JyjtbUOMEqMG-A2vz6wx4&hl=tr&source=gmail"
    );
    cy.urlRedirectControl();
    cy.wait(5000);
    homepage.girisYapVeyaUyeOlButton.realHover("mouse");
    homepage.girisYapButton
      .should("be.visible")
      .should("contain.text", "Giriş Yap")
      .click({ force: true });
    cy.url().should("contains", "https://giris.hepsiburada.com/");
    cy.wait(5000);
  });

  it("Add a product to cart and check", () => {
    cy.fixture("loginData").as("credentials");

    cy.get("@credentials").then((data) => {
      cy.login(data.username, data.password);
    });
    cy.goProductsFromAbroadPage();
    yurtDisindanPage.productCart.eq(13).realHover("mouse");
    homepage.sepeteEkleButton
      .should("be.visible")
      .should("contain.text", "Sepete ekle")
      .click({ force: true });
    homepage.sepeteEkleButton
      .should("be.visible")
      .should("contain.text", "Sepete ekle")
      .click({ force: true });
    cy.contains("Ürün sepete eklendi").should("be.visible");
    homepage.goShoppingCartPage.should("exist").click({ force: true });
    cy.url().should("contains", "https://checkout.hepsiburada.com/sepetim");

    shoppingCartPage.deleteProductButton.should("be.visible").click({ force: true });
    cy.deletePopupControl();
    cy.contains("Ürün sepetinizden kaldırıldı").should("be.visible");
  });
});
