// Comando personalizado para login
Cypress.Commands.add('login', (username, password) => {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
});

// Comando personalizado para agregar productos al carrito
Cypress.Commands.add('addProductsToCart', () => {
    cy.get('.inventory_item').each(($el) => {
        cy.wrap($el).find('button').click();
    });
    cy.get('.shopping_cart_badge').should('be.visible');
});

// Comando personalizado para realizar el checkout
Cypress.Commands.add('checkout', (firstName, lastName, postalCode) => {
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type(firstName);
    cy.wait(1000);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.contains('Thank you for your order!').should('be.visible');
});

// Comando personalizado para logout
Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
    cy.url().should('contain', 'saucedemo');
});
