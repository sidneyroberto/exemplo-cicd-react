import { BrowserRouter } from 'react-router-dom'
import WordCard from '.'
import FontStyles from '../../assets/fonts/fonts'
import { Word } from '../../models/Word'

describe('<WordCard />', () => {
  it('should render word info correctly', () => {
    cy.fixture('word').then((wordJson) => {
      const word: Word = wordJson as Word
      const order = 1

      cy.mount(
        <BrowserRouter>
          <FontStyles />
          <WordCard word={word} order={order} />
        </BrowserRouter>
      )

      const { audioUrls, meanings, term } = word
      const title = `${order} - ${term}`
      cy.get('[data-cy="word-title"]').should('have.text', title)

      const details = `${meanings.length} significado(s) e ${audioUrls.length} áudio(s) de pronúncia`

      cy.get('[data-cy="word-details"]').should('have.text', details)
    })
  })
})
