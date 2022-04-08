
describe('First automation tests', () => {
  
    it('Check the username input box whether its typeable', () => {
      cy.visit('https://demo.applitools.com/').wait(1000)
      cy.get('#username').first().type('friends.0.name.last').should('have.value', 'friends.0.name.last')
    })

    it('Check the password input box whether its typeable', () => {
      cy.visit('https://demo.applitools.com/').wait(1000)
      cy.get('#password').first().type('friends.0.name.last').should('have.value', 'friends.0.name.last')
    })
  })
  