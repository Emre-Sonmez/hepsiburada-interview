export class homepage {
  navigate() {
    cy.visit(
      "https://www.google.com/url?sa=D&q=https://www.hepsiburada.com/kampanyalar/yurt-disindan-urunler%3Fwt_int%3Dhytop.yurtdisi.kampanya&ust=1709380440000000&usg=AOvVaw1JyjtbUOMEqMG-A2vz6wx4&hl=tr&source=gmail"
    );
    return this;
  }

  urlRedirectControl() {
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
  }

  goLoginPage() {
    cy.wait(3000);
    cy.get("#myAccount").realHover("mouse");
    cy.get("#login")
      .should("be.visible")
      .should("contain.text", "Giriş Yap")
      .click({ force: true });
    cy.url().should("contains", "https://giris.hepsiburada.com/");
  }

  goShoppingCartPage() {
    cy.get("#shoppingCart").should("exist").click({ force: true });
  }

  goProductsFromAbroadPage() {
    cy.get(
      'a[href="https://www.hepsiburada.com/kampanyalar/yurt-disindan-urunler?wt_int=hytop.yurtdisi.kampanya"]'
    )
      .should("be.visible")
      .click({ force: true });

    cy.url().should(
      "contains",
      "https://www.hepsiburada.com/kampanyalar/yurt-disindan-urunler"
    );
  }

  addFirstProductToCart() {
    cy.get("[data-test-id='product-info-wrapper']").eq(13).realHover("mouse");
    cy.contains("Sepete ekle")
      .should("be.visible")
      .should("contain.text", "Sepete ekle")
      .click({ force: true });
    cy.wait(5000);
    cy.contains("Sepete ekle")
      .should("be.visible")
      .should("contain.text", "Sepete ekle")
      .click({ force: true });
    cy.wait(5000);
    cy.contains("Ürün sepete eklendi").should("be.visible");
    cy.wait(5000);
  }
}
