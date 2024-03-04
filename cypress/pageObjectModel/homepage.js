export class homepage {
  get girisYapVeyaUyeOlButton() {
    return cy.get("#myAccount");
  }

  get girisYapButton() {
    return cy.get("#login");
  }

  get goShoppingCartPage() {
    return cy.get("#shoppingCart");
  }

  get sepeteEkleButton() {
    return cy.contains("Sepete ekle");
  }

}

export default new homepage();

// export class homepage {



//   goProductsFromAbroadPage() {
//     cy.get(
//       'a[href="https://www.hepsiburada.com/kampanyalar/yurt-disindan-urunler?wt_int=hytop.yurtdisi.kampanya"]'
//     )
//       .should("be.visible")
//       .click({ force: true });

//     cy.url().should(
//       "contains",
//       "https://www.hepsiburada.com/kampanyalar/yurt-disindan-urunler"
//     );
//   }

//   addFirstProductToCart() {
//     cy.get("[data-test-id='product-info-wrapper']").eq(13).realHover("mouse");
//     cy.contains("Sepete ekle")
//       .should("be.visible")
//       .should("contain.text", "Sepete ekle")
//       .click({ force: true });
//     cy.wait(5000);
//     cy.contains("Sepete ekle")
//       .should("be.visible")
//       .should("contain.text", "Sepete ekle")
//       .click({ force: true });
//     cy.wait(5000);
//     cy.contains("Ürün sepete eklendi").should("be.visible");
//     cy.wait(5000);
//   }
// }
