describe('template spec', () => {
  it('passes', () => {
   cy.visit("https://localhost:3000/")
    cy.get(".dropdown").contains ("About")
  })
})