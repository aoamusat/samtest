/// <reference types="cypress" />

describe('Testing Samtest Application', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('Should return 200', () => {
        cy.request('http://localhost:3000').should((response) => {
            expect(response.status).to.eq(200);
        });
    });
});
