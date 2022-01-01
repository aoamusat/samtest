/// <reference types="cypress" />

describe('Testing Samtest Application', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('BASE_URL')}:${Cypress.env('PORT')}`);
    });

    it('Should return 200', () => {
        cy.request(`${Cypress.env('BASE_URL')}:${Cypress.env('PORT')}`).should(
            (response) => {
                expect(response.status).to.eq(200);
                cy.get('#floatingInput').type('abatan88@gmail.com');
                cy.get('#floatingPassword').type('1234567890');
                cy.screenshot();
                cy.get('.w-100').click();
                cy.get('.checkbox > label').click();
            },
        );
    });
});
