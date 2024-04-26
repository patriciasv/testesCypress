/// <reference types="cypress" />

describe('Testes Funcional de login', () => {
    it("Deve acessar a tela de login, clicar em cadastre-se,cadastrar o usuario e retornar a tela de login para preencher a tela de Login com sucesso", () => {
        cy.acessarLogin()
        cy.entrarLogin()
        cy.cadastrarUser('Teste Teste', 'Teste', '123456', '123456')
        cy.get('#msgSuccess').should('be.visible', "Cadastrando usuário...")
        cy.acessarLogin()
        cy.preencherLogin('Teste', '123456')
        cy.get('h1#logado').should('be.visible', "Olá Teste Teste")

    });
    it("Deve acessar a tela de login, clicar em cadastre-se, cadastrar o usuario e retornar a tela de login para preencher a tela de Login com sucesso, deve direcionar para a home e apertar o botão sair ", () => {
        cy.acessarLogin()
        cy.entrarLogin()
        cy.cadastrarUser('Teste Teste', 'Teste', '123456', '123456')
        cy.get('#msgSuccess').should('be.visible', "Cadastrando usuário...")
        cy.acessarLogin()
        cy.preencherLogin('Teste', '123456')
        cy.get('h1#logado').should('be.visible', "Olá Teste Teste")
        cy.get('button').click()
        cy.get('h1').should('be.visible')

    });
    it("Deve acessar a tela de login, clicar em cadastre-se, cadastrar o usuario e retornar a tela de login  para preencher a tela de Login com user incorreto", () => {
        cy.acessarLogin()
        cy.entrarLogin()
        cy.cadastrarUser('Teste Teste', 'Teste', '123456', '123456')
        cy.get('#msgSuccess').should('be.visible', "Cadastrando usuário...")
        cy.acessarLogin()
        cy.preencherLogin('incorreto', '123456')
        cy.get('#msgError').should('be.visible', "Usuário ou senha incorretos")

    });
    it("Deve acessar a tela de login, cadastrar o usuario e retornar a tela de login para preencher a tela de Login com senha incorreta", () => {
        cy.acessarLogin()
        cy.entrarLogin()
        cy.cadastrarUser('Teste Teste', 'Teste', '123456', '123456')
        cy.get('#msgSuccess').should('be.visible', "Cadastrando usuário...")
        cy.acessarLogin()
        cy.preencherLogin('Teste', 'incorreto')
        cy.get('#msgError').should('be.visible', "Usuário ou senha incorretos")

    });
  
});
