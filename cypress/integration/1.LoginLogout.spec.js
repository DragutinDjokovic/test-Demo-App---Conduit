describe('Login and Logout', () => {
    it('Sign in', () =>{
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.get('input[type="email"]').type('ddjwint@gmail.com')
        cy.get('input[type="password"]').type('Haveanaccount?')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.get('.navbar-brand').click()
        cy.get(':nth-child(4) > .nav-link').click()
        cy.get('.btn').click()
        cy.get('.btn-outline-danger').click()
        cy.get(':nth-child(3) > .nav-link').should('be.visible')
    })
})
