describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })
  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
  it('preenche os campos obrigatórios e envia o formulário', () => {

    const longText = Cypress._.repeat('Teste de preenchimento de formulário. ', 10)

    cy.get('#firstName').type('Kaico')
    cy.get('#lastName').type('Castro')
    cy.get('#email').type('kaico.castro@exemplo.com')
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.contains('Button', 'Enviar').click()

    cy.get('.success > strong').should('be.visible').and('contain', 'Mensagem enviada com sucesso.')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').type('Kaico')
    cy.get('#lastName').type('Castro')
    cy.get('#email').type('kaico.castro#exemplo.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('Button', 'Enviar').click()

    cy.get('.error > strong').should('be.visible').and('contain', 'Valide os campos obrigatórios!')

  })

  it('Campo telefone continua vazio quando preenchido com um valor não numérico', () => {
    cy.get('#phone')
      .type('kaicocastro')
      .should('have.value', '')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName').type('Kaico')
    cy.get('#lastName').type('Castro')
    cy.get('#email').type('kaico.castro#exemplo.com')
    cy.get('#phone-checkbox').check()
    cy.get('#open-text-area').type('Teste')
    cy.contains('Button', 'Enviar').click()

    cy.get('.error > strong').should('be.visible').and('contain', 'Valide os campos obrigatórios!')
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName')
      .type('Kaico')
      .should('have.value', 'Kaico')
      .clear()
      .should('have.value', '')
    cy.get('#lastName')
      .type('Castro')
      .should('have.value', 'Castro')
      .clear()
      .should('have.value', '')
    cy.get('#email')
      .type('kaico.castro#exemplo.com')
      .should('have.value', 'kaico.castro#exemplo.com')
      .clear()
      .should('have.value', '')
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.contains('Button', 'Enviar').click()

    cy.get('.error > strong').should('be.visible').and('contain', 'Valide os campos obrigatórios!')
  });

  it('envia o formulário com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success').should('be.visible')
  })

  it('seleciona um produto (YouTube) por seu texto', () => {
    cy.get('#product').select('YouTube')
      .should('have.value', 'youtube')
  })

  it('seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.get('#product').select('Mentoria')
      .should('have.value', 'mentoria')
  })

  it('seleciona um produto (Blog) por seu índice', () => {
    cy.get('#product').select(1)
      .should('have.value', 'blog')
  })

  it('marca o tipo de atendimento "Feedback"', () => {
    cy.get(':nth-child(4) > input').check()
      .should('be.checked')
  })

  it('marca cada tipo de atendimento', () => {
    cy.get('input[type="radio"]').check()
      .each(typeOfService => {
        cy.wrap(typeOfService)
          .check()
          .should('be.checked')
      })
  })

  it('marca ambos checkboxes, depois desmarca o último', () => {
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')
  })

  it('seleciona um arquivo da pasta fixtures', () => {
    cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/cypress.image.jpeg')
      .should(input => {
        expect(input[0].files[0].name).to.equal('cypress.image.jpeg')
      })
  })

  it('seleciona um arquivo simulando um drag-and-drop', () => {
    cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/cypress.image.jpeg', { action: 'drag-drop' })
      .should(input => {
        expect(input[0].files[0].name).to.equal('cypress.image.jpeg')
      })
  })

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    cy.fixture('cypress.image.jpeg').as('sampleFile')
    cy.get('input[type="file"]')
      .selectFile('@sampleFile')
      .should(input => {
        expect(input[0].files[0].name).to.equal('cypress.image.jpeg')
      })
  });

  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.contains('a', 'Política de Privacidade')
      .should('have.attr', 'href', 'privacy.html')
      .and('have.attr', 'target', '_blank')
  });

  it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    cy.contains('a', 'Política de Privacidade')
      .invoke('removeAttr', 'target')
      .click()

    cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
  });
})

