describe.only('Task List', function() {
  it('has a title', () => {
    cy.get('h1').should('have.text', 'Tasks');
  });

  it('shows several tasks', () => {
    cy.get('div[aria-label="task"]').should('have.length', 3);
    ['1Learn React', '2Learn to type', '3LOL'].forEach((item, i) => {
      cy.get('div[aria-label="task"]').eq(i).contains(item);
    });
  });
});