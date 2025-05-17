/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    compareSnapshot(
      name: string,
      options?: Partial<unknown>,
    ): Chainable<Subject>;
  }
}
