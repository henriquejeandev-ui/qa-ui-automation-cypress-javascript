describe('Login', () => {
    it('should redirect to inventory page when login with a valid credentials', () =>{
        cy.visit('/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();

        cy.url().should('include', '/inventory.html');
    });
});