declare namespace Cypress {
  interface Chainable {
    performSearch(query: string): Chainable<Element>
  }
}
