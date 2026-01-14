import SearchPage from '../../shared/pages/SearchPage'
import YoutubeHomePage from '../../shared/pages/YoutubeHomePage'

describe('Funcional - Navegação', () => {
  it('Deve navegar até um vídeo', () => {
    YoutubeHomePage.visit()

    SearchPage.search('Cypress testing')
    SearchPage.firstResult().click()

    cy.get('video').should('exist')
  })
})
