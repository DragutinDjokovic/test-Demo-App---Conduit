describe('Login', () => {
    it('Sign in', () =>{
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.get('input[type="email"]').type('ddjwint@gmail.com')
        cy.get('input[type="password"]').type('Haveanaccount?')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.get('.navbar-brand').click()
    })
})