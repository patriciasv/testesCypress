///<reference types="cypress" />

Cypress.Commands.add('acessarCadastro',()=>{
    cy.visit("http://127.0.0.1:5500/assets/html/signup.html")
})
Cypress.Commands.add('cadastrarUser',(nome,user,senha,confirmSenha)=>{
    cy.get('input#nome').should('be.visible')
    cy.get('input#nome').click().type(nome)
    cy.get('input#usuario').should('be.visible')
    cy.get('input#usuario').click().type(user) 
    cy.get('input#senha').should('be.visible')
    cy.get('input#senha').click().type(senha) 
    cy.get('input#confirmSenha').should('be.visible')
    cy.get('input#confirmSenha').click().type(confirmSenha) 
    cy.get('button').should('be.visible')
    cy.get('button').click()
   
  })