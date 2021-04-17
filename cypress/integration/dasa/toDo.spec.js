/// <reference types="cypress" />

describe('Inserir tarefas', () => {
  beforeEach(() => {
    cy.visit('http://192.168.0.14:8080/todo');
  });

  it('Inserir tarefa na lista TODO', () => {
    cy.get('[type="text"]').type('DasaTeste01');

    cy.get('[type="submit"] > .material-icons').click();

    cy.get('span[data-v-189e9673=""]')
      .should('be.visible')
      .and('contain', 'DasaTeste01');

    cy.get('.list-enter-active > [data-v-524c8880=""]')
      .should('be.visible')
      .click();

    cy.get('[href="/done"]')
      .should('be.visible')
      .click();

    cy.get('span[data-v-189e9673=""]').should('contain', 'DasaTeste01');
  });

  it('Deletar uma atividade em TODO', () => {
    cy.get('[type="text"]')
      .should('be.visible')
      .type('DeletarTarefa');

    cy.get('[type="submit"] > .material-icons')
      .should('be.visible')
      .click();

    cy.get('span[data-v-189e9673=""]').should('contain', 'DeletarTarefa');

    cy.get('[type="button"] > .material-icons')
      .should('be.visible')
      .click();

    cy.get('span[data-v-189e9673="]').should('not.be.visible', 'DeletarTarefa');
  });

  it('Adicionar mais de uma tarefa', () => {
    cy.get('[type="text"]').type('DasaTeste01 ; DasaTeste02');

    cy.get('[type="submit"] > .material-icons').click();

    cy.get(':nth-child(1) > span[data-v-189e9673=""]')
      .should('be.visible')
      .and('contain', 'DasaTeste01');

    cy.get(':nth-child(2) > span[data-v-189e9673=""]')
      .should('be.visible')
      .and('contain', 'DasaTeste02')
      .click();
  });

  it('Pesquisar tarefa realizada', () => {
    cy.get('[type="text"]').type('DasaTeste01 ; DasaTeste02');

    cy.get('[type="submit"] > .material-icons').click();

    cy.get(':nth-child(1) > span[data-v-189e9673=""]')
      .should('be.visible')
      .and('contain', 'DasaTeste01');

    cy.get(':nth-child(2) > span[data-v-189e9673=""]')
      .should('be.visible')
      .and('contain', 'DasaTeste02')
      .click();

    cy.get('[data-v-189e9673=""][data-v-524c8880=""] > :nth-child(1) > [data-v-524c8880=""]')
      .click();

    cy.get('[data-v-189e9673=""][data-v-524c8880=""] > :nth-child(2) > [data-v-524c8880=""]')
      .click();

    cy.get('[href="/done"]')
      .should('be.visible')
      .click();

    cy.get('form[data-v-36857488=""] > [data-v-36857488=""]')
      .type('DasaTeste01');

    cy.get('span[data-v-189e9673=""]')
      .should('contain', 'DasaTeste01');
  });
});
