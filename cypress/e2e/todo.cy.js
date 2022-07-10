/// <reference types="Cypress" />

describe("Todo Cypress Testing 1", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("input form should be auto-focused", () => {
    cy.get(".input_todo").focus();
  });

  it("select the input element, using a class", () => {
    cy.get(".input_todo").type("Mahesh").should("have.value", "Mahesh");
  });
});

describe("Todo Cypress Testing 2", () => {
  beforeEach(() => {
    cy.visit("http://example.cypress.io/todo");
  });

  it("should be able to add a task", () => {
    cy.get(".todo-list").children().should("have.length", 2);
    cy.get(".new-todo").type("Learn React{enter}");
    cy.get(".new-todo").type("Learn Redux{enter}");
    cy.get(".new-todo").type("Learn Cypress{enter}");
    cy.get(".todo-list").children().should("have.length", 5);
  });
});

describe("Todo Cypress Testing 3", () => {
  beforeEach(() => {
    cy.visit("http://example.cypress.io/todo");
  });

  it("should be able to toggle a task", () => {
    cy.get(".new-todo").type("Learn React{enter}");
    cy.get(".new-todo").type("Learn Redux{enter}");
    cy.get(".new-todo").type("Learn Cypress{enter}");
    cy.get(".toggle").first().click().get("li").should("have.class", "completed");
  });
});

describe("Todo Cypress Testing 4", () => {
  beforeEach(() => {
    cy.visit("http://example.cypress.io/todo");
  });

  it("check delete button present or not", () => {
    cy.get(".destroy").should("exist");
  });

  it("should be able to delete item", () => {
    cy.get(".todo-list").children().should("have.length", 2);
    cy.get(".toggle")
      .first()
      .click()
      .get("li")
      .should("have.class", "completed");
    // cy.get(".todo-list").first().get("li").get(".view").get(".destroy").click();
    // cy.get(".destroy").trigger("mouseover").children().first().click()
    cy.get(".todo-list").children().should("have.length", 2);
  });
});
