import VideoPlayer from '../../shared/components/VideoPlayer'

describe('Funcional - Player', () => {
  it('Deve tocar e pausar o vídeo', () => {
    cy.visit('https://www.youtube.com/watch?v=4iuO49jbovg&list=RD4iuO49jbovg&start_radio=1')

    VideoPlayer.play()
    VideoPlayer.pause()
  })
})
