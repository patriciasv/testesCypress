/// <reference types="cypress" />

describe('Testes Funcional de cadastro', () => {
    it("Deve acessar e preencher a tela de cadastro com sucesso ", () => {
        cy.acessarCadastro()
        cy.cadastrarUser('Teste Teste','Teste','123456','123456')
        cy.get('#msgSuccess').should('be.visible',"Cadastrando usuário...")
    
    });
    it("Deve acessar e preencher a tela de cadastro com nome incorreto ", () => {
        cy.acessarCadastro()
        cy.cadastrarUser('Te','Teste','123456','123456')
        cy.get('#labelNome').should('be.visible',"Nome *Insira no minimo 3 caracteres")
        cy.get('#msgError').should('be.visible',"Preencha todos os campos corretamente antes de cadastrar")
    });
    it("Deve acessar e preencher a tela de cadastro com usuario incorreto ", () => {
        cy.acessarCadastro()
        cy.cadastrarUser('Teste','T','123456','123456')
        cy.get('#labelUsuario').should('be.visible',"Usuário *Insira no minimo 5 caracteres")
        cy.get('#msgError').should('be.visible',"Preencha todos os campos corretamente antes de cadastrar")
    });
    it("Deve acessar e preencher a tela de cadastro com senha incorreta", () => {
        cy.acessarCadastro()
        cy.cadastrarUser('Teste','Teste Teste','1','123456')
        cy.get('#labelSenha').should('be.visible',"Senha *Insira no minimo 6 caracteres")
        cy.get('#msgError').should('be.visible',"Preencha todos os campos corretamente antes de cadastrar")
    });
    it("Deve acessar e preencher a tela de cadastro com confirmação de senha incorreta", () => {
        cy.acessarCadastro()
        cy.cadastrarUser('Teste','Teste Teste','123456','1')
        cy.get('#labelConfirmSenha').should('be.visible',"Confirmar Senha *As senhas não conferem")
        cy.get('#msgError').should('be.visible',"Preencha todos os campos corretamente antes de cadastrar")
    });
})