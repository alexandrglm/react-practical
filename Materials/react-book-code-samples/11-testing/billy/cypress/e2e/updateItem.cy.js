describe('template spec', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  });

  it("does not update if form values empty", () => {
    cy.get("#item-1 button").eq(0).click();
    cy.get(".item-form").eq(1).should("exist");

    const item = {description: "Ice cream", tax: 21, price: 2.99, qty: 2};

    Object.keys(item).forEach( (key, index) => {
      cy.get(`.item-form input[name=${key}]`).eq(1).clear();
      cy.get(".item-form button").eq(1).click();
      cy.get(".item-form").eq(1).should("exist");
      cy.get(`.item-form input[name=${key}]`).eq(1).type(item[key]);
    })
    // Instead of
    cy.get(".item-form input[name='tax']").eq(1).clear();
    cy.get(".item-form button").eq(1).click();
    cy.get(".item-form").eq(1).should("exist");
    cy.get(".item-form input[name='tax']").eq(1).type("21");
  });

  it("should update item", () => {
    cy.get("#item-1 button").eq(0).click();
    cy.get(".item-form").eq(1).should("exist");

    cy.get(".item-form input[name=description]").eq(1).clear().type("Super IceCream");
    cy.get(".item-form input[name=tax]").eq(1).clear().type("12");
    cy.get(".item-form input[name=price]").eq(1).clear().type("55");
    cy.get(".item-form input[name=qty]").eq(1).clear().type("1");
    cy.get(".item-form button").eq(1).click();
    
    cy.get(".item-form").eq(1).should("not.exist");
    cy.get("#item-1 div").eq(1).should("have.text", "Super IceCream");
    cy.get("#item-1 div").eq(2).should("have.text", "12");
    cy.get("#item-1 div").eq(3).should("have.text", "55");
    cy.get("#item-1 div").eq(4).should("have.text", "1");
  });

  it("should update total", () => {
    cy.get(".item-list-count").should("have.text", "Items: 2");
    cy.get('.bill-total').should('have.text', "31.42")
    cy.get("#item-1 button").eq(0).click();

    cy.get(".item-form input[name=description]").eq(1).clear().type("Super IceCream");
    cy.get(".item-form input[name=tax]").eq(1).clear().type("12");
    cy.get(".item-form input[name=price]").eq(1).clear().type("55");
    cy.get(".item-form input[name=qty]").eq(1).clear().type("1");
    cy.get(".item-form button").eq(1).click();
    
    cy.get(".item-list-count").should("have.text", "Items: 2");
    cy.get('.bill-total').should('have.text', "85.79")
  });
})