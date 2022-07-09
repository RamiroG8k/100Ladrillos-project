describe('Navbar responsiveness', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	})


	it('cy.viewport() - set the viewport size and dimension', () => {
		cy.get('.navbar').should('be.visible');

		// PC
		cy.viewport('macbook-15');
		cy.wait(200);

		cy.get('.hamburger-menu > svg').should('not.be.visible');
		cy.get('.logo-mini').should('not.be.visible');

		// Ipad | Tablet
		cy.viewport('ipad-2')
		cy.wait(200)

		cy.get('.hamburger-menu > svg').should('be.visible');
		cy.get('.logo-mini').should('be.visible');
		
		// Iphone Devices
		cy.viewport('iphone-6+')
		cy.wait(200)
		
		cy.get('.hamburger-menu > svg').should('be.visible');
		cy.get('.logo-mini').should('be.visible');
	});
})