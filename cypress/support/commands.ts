Cypress.Commands.add('performSearch', (query: string) => {
  cy.get('[data-cy="search-input"]').type(query)
  cy.get('[data-cy="search-button"]').click()
})
