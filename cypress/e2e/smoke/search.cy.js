import YouTubeHomePage from '../../shared/pages/YouTubeHomePage'

describe('Smoke - Busca', () => {
  it.only('Deve realizar uma busca no YouTube', () => {

    YouTubeHomePage.visit()
    YouTubeHomePage.validateSearchInputVisible()
    YouTubeHomePage.searchFor('Teste de Software do Zero')
    YouTubeHomePage.validateSearchResults()

  })
})

describe('Smoke - Busca', () => {
  it('Deve realizar uma busca no YouTube', () => {

    // 1. Abrir o site do YouTube
    cy.visit('https://www.youtube.com', {
      timeout: 30000,
      failOnStatusCode: false
    })

    // 2. Validar se a barra de busca está visível
    cy.get('input[name="search_query"]', { timeout: 20000 })
      .should('exist')
      .and('be.visible')

    // 3. Digitar o termo e buscar
    cy.get('input[name="search_query"]')
      .clear()
      .type('Teste de Software{enter}')

    // 4. Validar que a busca foi executada
    cy.url().should('include', 'search_query')

    // 5. Validar que existem resultados
    cy.get('ytd-video-renderer', { timeout: 20000 })
      .should('have.length.greaterThan', 0)
  })
})

