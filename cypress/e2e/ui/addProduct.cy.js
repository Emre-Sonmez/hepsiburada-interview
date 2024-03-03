/// <reference types="cypress" />
import "cypress-real-events/support";
import { homepage } from "../../pageObjectModel/homepage";
import { shoppingCartPage } from "../../pageObjectModel/shoppingCartPage";
const shoppingCartPagePom = new shoppingCartPage();
const homepagePom = new homepage();

describe("Pet Shop", () => {
  beforeEach(() => {
    cy.log("Test starts");
    homepagePom.navigate();
    homepagePom.urlRedirectControl();
    homepagePom.goLoginPage();
  });

  it("Add a pet shop product to cart and check", () => {
    cy.fixture("loginData").as("credentials");

    cy.get("@credentials").then((data) => {
      cy.login(data.username, data.password);
    });

    homepagePom.goProductsFromAbroadPage();
    homepagePom.selectFirstProduct();
    homepagePom.goShoppingCartPage();
    shoppingCartPagePom.deleteButton();
  });
});