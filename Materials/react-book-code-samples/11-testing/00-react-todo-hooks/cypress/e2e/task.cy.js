describe.only('Task management', function() {
  it('has data and buttons', () => {
    cy.get('div[aria-label="task"]').eq(0).contains('1Learn React');
  });

  it('has buttons', () => {
    cy.get('div[aria-label="task"] button').eq(0).should('have.text','Edit');
    cy.get('div[aria-label="task"] button').eq(1).should('have.text','Delete');
  });

  it('deletes task', () => {
    cy.get('div[aria-label="task"]').eq(0).contains('1Learn React');
    cy.get('div[aria-label="task"] button').eq(1).click();
    cy.get('div[aria-label="task"]').should('not.contain', '1Learn React');
  });

  it('toggles update form', () => {
    cy.get('div[aria-label="task"]').eq(0).contains('1Learn React');
  
    cy.get('div[aria-label="task"] button').eq(0).click();

    cy.get('div[aria-label="task"] input').eq(0).should('have.value', 'Learn React');
    cy.get('div[aria-label="task"] button').eq(0).should('have.text','Save');
  });

  it('should update task', () => {
    cy.get('div[aria-label="task"] button').eq(0).click();

    cy.get('div[aria-label="task"] input').eq(0).clear().type("Learn More React");
    cy.get('div[aria-label="task"] button').eq(0).click();

    cy.get('div[aria-label="task"]').eq(2).contains('Learn More React');
  });
});