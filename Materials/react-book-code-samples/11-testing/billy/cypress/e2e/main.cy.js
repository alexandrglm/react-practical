describe('main spec', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  });

  it("cy.document() - get the document object", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8")
  });

  it("has a page title", () => {
    cy.title().should("include", "Billy App")
  });

  it("shows Header title", () => {
    cy.get("h1.App-title").should("have.text", "Billy")
  });
})