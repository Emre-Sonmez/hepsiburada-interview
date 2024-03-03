/// <reference types="cypress" />
import "cypress-real-events/support";
import { Homepage } from "../../pageObjectModel/homepage";
const homepagePom = new Homepage();

describe("Pet Shop", () => {
  beforeEach(() => {
    cy.log("Test starts");
    homepagePom.navigate();
    homepagePom.urlRedirectControl();
    homepagePom.goLoginPage();

  });

  it("Add a pet shop product to cart and check", () => {
    cy.wait(5000)
    cy.login('hepsiburada.interview@gmail.com', 'Test123!*');

    cy.get(
      "div#container div.sf-TopLinks-BNeUkuZpKh9UMA2_zK8p > ul > li:nth-child(3) > a"
    ).click();
    cy.get(
      "div:nth-of-type(17) .treeCategoryContent-XPVj5InCxOWIJtyTC35Z"
    ).click({ force: "true" });
    cy.get(
      "[type='comfort']:nth-of-type(1) .moria-ProductCard-gyqBb [type='comfort']:nth-of-type(2)"
    ).realHover();
    cy.get(".moria-ProductCard-fJNuEt").click({ force: true });
    cy.get(".moria-ProductCardButton-gAKKtp").click({ force: true });
    cy.get("#shoppingCart").click({ force: true });
  });
});
