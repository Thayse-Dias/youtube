class VideoPlayer {
  showControls() {
    cy.get('video')
      .should('exist')
      .trigger('mousemove', { force: true })
  }

  play() {
    this.showControls()

    cy.get('.ytp-play-button', { timeout: 20000 })
      .should('be.visible')
      .click({ force: true })
  }

  pause() {
    this.showControls()

    cy.get('.ytp-play-button')
      .should('be.visible')
      .click({ force: true })
  }
}

export default new VideoPlayer()


//👉 Esse código é um Component Object do player de vídeo do YouTube.

//🎯 Para que ele serve no projeto?

//Ele encapsula as ações do player (Play e Pause), permitindo que os testes:

//Não dependam de seletores espalhados pelo código

//Fiquem mais legíveis

//Sejam mais fáceis de manter

// “Component Objects isolam comportamentos repetidos e tornam a automação mais estável e profissional.”

// ✅ Resumo rápido

//✔ Representa o player de vídeo
//✔ Evita duplicação de código
//✔ Facilita manutenção
//✔ Segue padrão usado em projetos reais