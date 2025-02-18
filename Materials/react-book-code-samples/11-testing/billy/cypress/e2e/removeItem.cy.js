describe('template spec', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  });

  it("deletes item and updates count", () => {
    cy.get(".bill-item div").eq(1).should("have.text","Ice cream");
    cy.get("#item-1 button").eq(1).click();
    cy.get(".bill-item div").eq(1).should("not.have.text","Ice cream");
  });

  it("deletes item and updates results", () => {
    cy.get(".bill-item div").eq(1).should("have.text","Ice cream");
    cy.get("#item-1 button").eq(1).click();
    cy.get(".bill-item div").eq(1).should("not.have.text","Ice cream");
  });

  it("should update total", () => {
    cy.get(".item-list-count").should("have.text", "Items: 2");
    cy.get('.bill-total').should('have.text', "31.42")

    cy.get("#item-1 button").eq(1).click();
    
    cy.get(".item-list-count").should("have.text", "Items: 1");
    cy.get('.bill-total').should('have.text', "24.19")
  });
})