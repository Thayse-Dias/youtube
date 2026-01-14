class SearchPage {
  search(term) {
    cy.get('input[name="search_query"]').clear().type(`${term}{enter}`)
  }

  firstResult() {
    return cy.get('ytd-video-renderer').first()
  }
}

export default new SearchPage()
