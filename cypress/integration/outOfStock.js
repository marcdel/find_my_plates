/// <reference types="cypress" />

context('Aliasing', () => {
  beforeEach(() => {
    cy.visit('https://yearandday.com/products/big-plate?pottery-color=daybreak')
  })

  it('is out of stock', () => {
    cy.get('.cProductCard-status-el').contains('Out of stock')
    // cy.get('.cAddToCart--text').should('have.value', 'Out of stock')
  })
})
