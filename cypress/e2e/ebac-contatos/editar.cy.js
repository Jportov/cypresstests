///<referencer types="cypress" />
describe('Editando contato', () => {
    beforeEach(() => cy.visit('https://agenda-contatos-react.vercel.app'))
    it('Deve alterar o nome e dados do contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        
        cy.get('[type="text"]').clear()
        cy.get('[type="email"]').clear()
        cy.get('[type="tel"]').clear()
        cy.get('[type="text"]').type('Lucas')
        cy.get('[type="email"]').type(' lucas@gmail.com')
        cy.get('[type="tel"]').type('22 992445758')
        cy.get('.alterar').click()
        cy.screenshot('tela-editadando-contato')
    })
        
})