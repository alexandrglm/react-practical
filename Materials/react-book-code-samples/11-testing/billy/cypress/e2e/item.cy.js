describe.only("Item management", function() {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("has data", () => {
    [0, "Ice cream", 21, 2.99, 2].forEach((content, index) => {
      cy.get("#item-1 div").eq(index).should("have.text", content);
    })
    // by class, first row second div
    cy.get(".bill-item div").eq(1).should("have.text","Ice cream");
  });

  it("has buttons", () => {
    cy.get(".item-controls button").eq(0).should("have.text","Edit");
    cy.get(".item-controls button").eq(1).should("have.text","Delete");
  });

  it("deletes item", () => {
    cy.get(".bill-item div").eq(1).should("have.text","Ice cream");
    cy.get("#item-1 button").eq(1).click();
    cy.get(".bill-item div").eq(1).should("not.have.text","Ice cream");
  });

  it("toggles update form", () => {
    cy.get(".item-form").eq(0).should("exist");
    cy.get(".item-form").eq(1).should("not.exist");
    cy.get("#item-1 button").eq(0).click();
    cy.get(".item-form").eq(1).should("exist");

    cy.get(".item-form button").eq(1).click();

    cy.get(".item-form").eq(0).should("exist");
    cy.get(".item-form").eq(1).should("not.exist");
  });

  it("does not update if form empty", () => {
    cy.get("#item-1 button").eq(0).click();
    cy.get(".item-form").eq(1).should("exist");

    cy.get(".item-form input[name=description]").eq(1).clear();
    cy.get(".item-form button").eq(1).click();
    cy.get(".item-form").eq(1).should("exist");
  });

  it("should update item", () => {
    cy.get("#item-1 button").eq(0).click();
    cy.get(".item-form").eq(1).should("exist");

    cy.get(".item-form input[name=description]").eq(1).clear().type("Super IceCream");
    cy.get(".item-form input[name=price]").eq(1).clear().type("55");
    cy.get(".item-form button").eq(1).click();
    
    cy.get(".item-form").eq(1).should("not.exist");
    cy.get("#item-1 div").eq(1).should("have.text", "Super IceCream");
  });
});