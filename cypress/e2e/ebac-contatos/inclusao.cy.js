///<referencer types="cypress" />
describe('Inserindo dados', () => {
    beforeEach(() => cy.visit('https://agenda-contatos-react.vercel.app'))
    it('Deve preencher o preenchimento do formulário', () => {
        cy.get('[type="text"]').type('joão victor')
        cy.get('[type="email"]').type('joaovportog@gmail.com')
        cy.get('[type="tel"]').type("22 00000000")
        cy.get('.adicionar').click() 
        cy.screenshot('tela-incluindo-dados')
    })
})