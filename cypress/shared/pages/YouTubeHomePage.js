class YouTubeHomePage {

  visit() {
    cy.visit('https://www.youtube.com', {
      timeout: 30000,
      failOnStatusCode: false
    })
  }

  getSearchInput() {
    return cy.get('input[name="search_query"]', { timeout: 20000 })
  }

  validateTitle() {
    cy.title().should('include', 'YouTube')
  }

  validateSearchInputVisible() {
    this.getSearchInput()
      .should('exist')
      .and('be.visible')
  }

  searchFor(term) {
    this.getSearchInput()
      .clear()
      .type(`${term}{enter}`)
  }

  validateSearchResults() {
    cy.url().should('include', 'search_query')

    cy.get('ytd-video-renderer', { timeout: 20000 })
      .should('have.length.greaterThan', 0)
  }
}

export default new YouTubeHomePage()
