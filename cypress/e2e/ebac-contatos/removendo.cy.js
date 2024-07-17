///<referencer types="cypress" />
describe('Removendo contatos', () => {
    beforeEach(() => cy.visit('https://agenda-contatos-react.vercel.app'))
    it('Deve remover um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
        cy.screenshot('tela-removendo-contato')
    })
    })
        