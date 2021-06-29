/// <reference types="Cypress" />

describe('Accessibility tests', () => {

    it('should send focus to a skip link when the route changes from', () => {
        cy.visit('http://localhost:8000')
        cy.get('#page-navigation li:first-of-type a').click()

        cy.focused().should('have.class', 'routeSkipLink')
    })
})
