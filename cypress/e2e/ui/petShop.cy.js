/// <reference types="cypress" />
import "cypress-real-events/support";
import { homepage } from "../../pageObjectModel/homepage";
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
    cy.get(
      'a[href="https://www.hepsiburada.com/kampanyalar/yurt-disindan-urunler?wt_int=hytop.yurtdisi.kampanya"]'
    ).click({ force: true });
    cy.get(
      "[type='comfort']:nth-of-type(1) .moria-ProductCard-gyqBb [type='comfort']:nth-of-type(2)"
    ).realHover("mouse");
    cy.get(".moria-ProductCard-fJNuEt").click({ force: true });
    cy.get(".moria-ProductCardButton-gAKKtp").click({ force: true });
    cy.wait(3000);
    cy.get("#shoppingCart").click({ force: true });
  });
});
