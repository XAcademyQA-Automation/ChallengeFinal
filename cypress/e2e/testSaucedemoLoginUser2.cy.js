// Archivo: cypress/e2e/myTestSaucedemo.cy.js

describe(
  "Tests de compra en SauceDemo con comandos personalizados con usuario problem_user",
  { testIsolation: false },
  () => {
    const baseUrl = "https://www.saucedemo.com/";

    beforeEach(() => {
      cy.visit(baseUrl); // Navegar al sitio antes de cada test
    });

    it("Compra con user 2 - problem_user", () => {
      cy.login("problem_user", "secret_sauce"); // Login con usuario problem_user
      cy.addProductsToCart(); // Agregar productos
      cy.checkout("Ned", "Flanders", "67890"); // Checkout con datos de prueba
      cy.wait(1000);
      cy.logout(); // Logout
      cy.wait(1000);
    });
  }
);
