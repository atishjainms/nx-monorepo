describe('store-ui-shared: Header component', () => {
  beforeEach(() => cy.visit(
    '/iframe.html?id=header--primary&args=title:BoardGameHoard'
  ));
    
  it('should show the title', () => {
    cy.get('h6').contains('BoardGameHoard');
  });
});
