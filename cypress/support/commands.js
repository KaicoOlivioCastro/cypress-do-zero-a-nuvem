Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'Giovana',
    lastName: 'Castro',
    email: 'giovanacastro@exemplo.com',
    text: 'Teste de mensagem'
}) => {
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.contains('Button', 'Enviar').click()
    
    cy.get('.success > strong').should('be.visible').and('contain', 'Mensagem enviada com sucesso.')
})