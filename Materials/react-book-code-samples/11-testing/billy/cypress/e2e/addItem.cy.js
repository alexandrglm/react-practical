describe('template spec', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  });

  it("should have default create values", () => {
    cy.get(".item-form input[name=description]").should("have.value", "")
    cy.get(".item-form input[name=tax]").should("have.value", "21")
    cy.get(".item-form input[name=price]").should("have.value", "0")
    cy.get(".item-form input[name=qty]").should("have.value", "0")
  });

  it("should create item", () => {
    cy.get(".item-list-count").should("have.text", "Items: 2");
    cy.get('.bill-item').should('have.length', 2)

    cy.get(".item-form input[name=description]").eq(0).clear().type("Another IceCream");
    cy.get(".item-form input[name=tax]").eq(0).clear().type("16");
    cy.get(".item-form input[name=price]").eq(0).clear().type("5");
    cy.get(".item-form input[name=qty]").eq(0).clear().type("1");
    cy.get(".item-form button").eq(0).click();

    cy.get(".bill-item").eq(2).contains(/Another IceCream/i);
    cy.get(".bill-item").eq(2).children("div").eq(0).should("have.text", "2")
    cy.get(".bill-item").eq(2).children("div").eq(1).should("have.text", "Another IceCream")
    cy.get(".bill-item").eq(2).children("div").eq(2).should("have.text", "16")
    cy.get(".bill-item").eq(2).children("div").eq(3).should("have.text", "5")
    cy.get(".bill-item").eq(2).children("div").eq(4).should("have.text", "1")
    
    cy.get(".item-list-count").should("have.text", "Items: 3");
    cy.get('.bill-item').should('have.length', 3)
  });

  it("should reset form after creation", () => {
    cy.get(".item-form input[name=description]").eq(0).clear().type("Another IceCream");
    cy.get(".item-form input[name=tax]").eq(0).clear().type("16");
    cy.get(".item-form input[name=price]").eq(0).clear().type("5");
    cy.get(".item-form input[name=qty]").eq(0).clear().type("1");
    cy.get(".item-form button").eq(0).click();
    
    cy.get(".item-form input[name=description]").should("have.value", "")
    cy.get(".item-form input[name=tax]").should("have.value", "21")
    cy.get(".item-form input[name=price]").should("have.value", "0")
    cy.get(".item-form input[name=qty]").should("have.value", "0")
  });

  it("should update total", () => {
    cy.get(".item-list-count").should("have.text", "Items: 2");
    cy.get('.bill-total').should('have.text', "31.42")

    cy.get(".item-form input[name=description]").eq(0).clear().type("Another IceCream");
    cy.get(".item-form input[name=tax]").eq(0).clear().type("16");
    cy.get(".item-form input[name=price]").eq(0).clear().type("5");
    cy.get(".item-form input[name=qty]").eq(0).clear().type("1");
    cy.get(".item-form button").eq(0).click();
    
    cy.get(".item-list-count").should("have.text", "Items: 3");
    cy.get('.bill-total').should('have.text', "37.22")
  });
})