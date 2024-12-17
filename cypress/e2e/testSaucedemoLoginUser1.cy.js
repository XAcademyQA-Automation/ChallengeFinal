// Archivo: cypress/e2e/myTestSaucedemo.cy.js

describe(
  "Tests de compra en SauceDemo con comandos personalizados con usuario standard_user",
  { testIsolation: false },
  () => {
    const baseUrl = "https://www.saucedemo.com/";

    beforeEach(() => {
      cy.visit(baseUrl); // Navegar al sitio antes de cada test
    });

   it("Compra con user 1 - standard_user", () => {
      cy.login("standard_user", "secret_sauce"); // Login con usuario standard_user
      cy.addProductsToCart(); // Agregar productos
      cy.checkout("Homero", "Simpson", "12345"); // Checkout con datos de prueba
      cy.wait(1000);
      cy.logout(); // Logout
      cy.wait(1000);
    })
  }
);
