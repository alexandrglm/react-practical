describe('main spec', () => {
  it("cy.document() - get the document object", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8")
  });

  it("has a page title", () => {
    cy.title().should("include", "React App")
  });

  it('has a title', () => {
    cy.get('h1').should('have.text', 'Tasks');
  });
})