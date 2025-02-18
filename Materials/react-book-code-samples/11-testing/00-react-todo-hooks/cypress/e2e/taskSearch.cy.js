describe.only('Task Search', function() {
  it('have buttons to search and reset', () => {
    cy.get('button').eq(0).should('have.text', 'Search for task');
    cy.get('button').eq(1).should('have.text', 'Reset');
  });

  it('search for specific tasks', () => {
    cy.get('div[aria-label="task"]').should('have.length', 3)

    cy.get('input').eq(0).clear().type('LOL');
    cy.get('button').eq(0).click();

    cy.get('div[aria-label="task"]').should('have.length', 1)
  });

  it('should reset input', () => {
    cy.get('div[aria-label="task"]').should('have.length', 3)

    cy.get('input').eq(0).clear().type('LOL');
    cy.get('button').eq(0).click();

    cy.get('div[aria-label="task"]').should('have.length', 1)

    cy.get('button').eq(1).click();

    cy.get('input').eq(0).should('have.value', '');
    cy.get('div[aria-label="task"]').should('have.length', 3)
  });
});