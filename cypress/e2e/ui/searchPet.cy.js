/// <reference types="cypress" />


describe('Search Pet Shop', () => {
  beforeEach(() => {
    //cy.visit('https://www.hepsiburada.com/');
    cy.visit('https://www.hepsiburada.com/', {failOnStatusCode: false});
    cy.wait(10000)
    //cy.get('#myAccount').realHover('mouse');
    
  })

  it('displays two todo items by default', () => {
    cy.get('#myAccount').realHover('mouse');
    cy.get('#login').click({force: true});
  })

  
})
