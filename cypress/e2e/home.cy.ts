describe('Home Page', () => {
  const rootPath = '/';

  it('should render page with expected header and footer', () => {
    cy.visit(rootPath);

    cy.getBySel('header-title').should('be.visible');
    cy.getBySel('header-title').should('have.text', 'Tree Visualizer');
    cy.getBySel('footer-info').should('be.visible');
    cy.getBySel('footer-info').should('have.text', 'Info');
    cy.getBySel('footer-info-0').should('be.visible');
    cy.getBySel('footer-info-0').should(
      'have.text',
      'Binary Trees are trees whose nodes can only have up to two children (Hence the name Binary)',
    );
  });

  it('should show placeholder if the input is empty', () => {
    cy.visit(rootPath);
    cy.get('.DuiInputBase').should('have.attr', 'placeholder', 'write something here ...');
  });

  it('should show typed strings and draw it on screen', () => {
    cy.visit(rootPath);

    cy.get('.DuiInputBase').click();
    cy.get('.DuiInputBase').clear();
    cy.get('.DuiInputBase').type('a b c d e f g h');
    cy.get('.DuiInputBase').should('have.value', 'a b c d e f g h');

    cy.get('.DuiTreeVisualizer > :nth-child(1) > :nth-child(1) > :nth-child(1)').should('have.text', 'a');
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1)').should('have.text', 'b');
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(1)').should('have.text', 'c');
    cy.get(
      ':nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1)',
    ).should('have.text', 'd');
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(2) > span').should('have.text', 'e');
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > span').should('have.text', 'f');
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > span').should('have.text', 'g');
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > li > span').should(
      'have.text',
      'h',
    );
  });
});
