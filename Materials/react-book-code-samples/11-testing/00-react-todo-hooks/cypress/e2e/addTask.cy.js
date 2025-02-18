describe('Create Task', () => {
  it('have a form to add tasks', () => {
    cy.get('input').eq(1).should('have.value', '');
    cy.get('button').eq(2).should('have.text', 'Create task');
  });

  it('should create tasks', () => {
    cy.get('div[aria-label="task"]').should('have.length', 3);

    cy.get('input').eq(1).clear().type('New Task');
    cy.get('button').eq(2).click();

    cy.get('div[aria-label="task"]').should('have.length', 4);
    cy.get('div[aria-label="task"]').contains('New Task');
  });
});