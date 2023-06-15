describe('Password Generator', () => {
  beforeEach(() => {
    cy.visit('/'); // Remplacez l'URL par l'URL de votre application
  });

  it('Generates a password with the correct format', () => {
    cy.get('[data-testid="password-generator"] button[type="submit"]').click();

    cy.get('[data-testid="password"]').should('be.visible').invoke('text').then((password) => {
      expect(password).to.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[?,.;/:+=\[\](){}\-_@%^£#€]).{12}$/);
    });
  });
});
