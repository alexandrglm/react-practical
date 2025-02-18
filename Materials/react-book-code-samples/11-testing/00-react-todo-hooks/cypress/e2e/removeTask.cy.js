describe('Task deletion', () => {
  it('deletes task', () => {
    cy.get('div[aria-label="task"]').should('have.length', 3);
    cy.get('div[aria-label="task"]').should('contain', '1Learn React');

    cy.get('div[aria-label="task"] button').eq(1).click();

    cy.get('div[aria-label="task"]').should('have.length', 2);
    cy.get('div[aria-label="task"]').should('not.contain', '1Learn React');
  });

  it('deletes all tasks', () => {
    cy.get('div[aria-label="task"]').should('have.length', 3);

    [3, 2, 1].forEach((count, i) => {
      cy.get('div[aria-label="task"] button').eq(1).click();
      cy.get('div[aria-label="task"]').should('have.length', count - 1);
    });
  });
})