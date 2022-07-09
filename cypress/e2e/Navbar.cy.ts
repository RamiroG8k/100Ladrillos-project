describe('Navbar navigation', () => {
	it('passes', () => {
		cy.visit('http://localhost:3000/');
		cy.get('.navbar');
	})
})