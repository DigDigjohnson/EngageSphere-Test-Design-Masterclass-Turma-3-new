/// <reference types="Cypress" />

//API Test Suit
describe('API Tests', () => {

    it('Recupera clientes com sucesso', () => {
        //Realiza uma request para a p�gina e verifica se a resposta � 200
        cy.request('https://engage-sphere.vercel.app').should(function (response) {
            console.log(response)
            const { status } = response
            expect(status).to.equal(200)
        })
    })
})