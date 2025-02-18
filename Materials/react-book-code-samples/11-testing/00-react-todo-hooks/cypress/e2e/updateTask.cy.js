describe('Updates', () => {
  it('updates task', () => {
    cy.get('div[aria-label="task"]').eq(0).contains('1Learn React');
  
    cy.get('div[aria-label="task"] button').eq(0).click();

    cy.get('div[aria-label="task"] input').eq(0).should('have.value', 'Learn React');
    cy.get('div[aria-label="task"] button').eq(0).should('have.text','Save');

    cy.get('div[aria-label="task"] input').eq(0).clear().type('Learn More React');
    cy.get('div[aria-label="task"] button').eq(0).click();

    cy.get('div[aria-label="task"]').eq(2).contains('Learn More React');
  });
});