describe('See that the application loads', function() {
    it('Visits the app at localhost:3000', function() {
      cy.visit('localhost:3000')

      cy.get('.search-bar')
      .type('hello world')

      cy.get('.gif-item')
      .children().should('have.length', 25)

    })
  })