describe.only("Item List", function() {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("has a title", () => {
    cy.get("div.item-list-title").should("have.text", "Item list");
  });

  it("shows item count", () => {
    cy.get("div.item-list-count").should("have.text", "Items: 2");
    cy.get('.bill-item').should('have.length', 3)
  });

  it("has Task Data components for each task", () => {
    cy.get("div.bill-item").should("have.length", 2);
  });

  it("have a link to add tasks", () => {
    cy.get("button").eq(0).should("have.text", "Save");
  });
});