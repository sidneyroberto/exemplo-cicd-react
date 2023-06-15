import { Word } from '../../models/Word'
import {
  WordCardPanel,
  WordDetailsLink,
  WordDetailsText,
  WordTitle,
} from './styles'

type Props = {
  order: number
  word: Word
}

const WordCard = ({ order, word }: Props) => {
  const { audioUrls, meanings, term } = word
  const details = `${meanings.length} significado(s) e ${audioUrls.length} áudio(s) de pronúncia`

  return (
    <WordCardPanel data-cy='word-card'>
      <WordTitle data-cy='word-title'>{`${order} - ${term}`}</WordTitle>
      <WordDetailsLink to='/details' state={{ word }}>
        <WordDetailsText data-cy='word-details'>{details}</WordDetailsText>
      </WordDetailsLink>
    </WordCardPanel>
  )
}

export default WordCard
