import verses from '@/utils/verses'

const Verse = ({ params }) => {
  const verseId = params.verseId
  const chapterId = params.chapterId
  const verse = verses['Bhagavad-Gita'].find(
    (verse) => verse.Chapter.slice(8) === chapterId && verse.Verse.slice(8) === verseId
  )
  const sanskritAnuvadLines = verse ? verse['Sanskrit Anuvad'].split('|') : []


  return (
    <div>
      {verse ? (
        <div>
          <p>{sanskritAnuvadLines[0]}</p>
          {sanskritAnuvadLines[1] && <p>{sanskritAnuvadLines[1]}</p>}
          <p>{verse['Hindi Anuvad']}</p>
          <p>{verse['English Translation']}</p>
        </div>
      ) : (
        <p>Verse not found</p>
      )}
    </div>
  )
}

export default Verse
