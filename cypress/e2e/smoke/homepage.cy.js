
//Teste: Página inicial do YouTube
  //Deve:
    //1. Abrir o site do YouTube
   // 2. Verificar se o título da página tem "YouTube"
    //3. Verificar se a barra de pesquisa aparece na tela

import YouTubeHomePage from '../../shared/pages/YouTubeHomePage'

describe('Smoke - Homepage', () => {
  it.only('Deve carregar a página do YouTube', () => {

    YouTubeHomePage.visit()
    YouTubeHomePage.validateTitle()
    YouTubeHomePage.validateSearchInputVisible()

  })
})

describe('Smoke - Homepage', () => {
  it('Deve carregar a home do YouTube', () => {

    cy.visit('https://www.youtube.com', {
      timeout: 30000,
      failOnStatusCode: false
    })

    // Verificar o título
    cy.title().should('include', 'YouTube')

    // Verificar se a barra de pesquisa está visível
    cy.get('input[name="search_query"]', { timeout: 30000 })
      .should('be.visible')
  })
})
