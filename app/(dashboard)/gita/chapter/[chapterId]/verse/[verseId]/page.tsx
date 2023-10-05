import verses from '@/utils/verses'

const Verse = ({ params }) => {
  const verseId = params.verseId
  const chapterId = params.chapterId
  let slicingIndex
  if (chapterId.length == 2) {
    slicingIndex = 9
  } else {
    slicingIndex = 8
  }
  const verse = verses['Bhagavad-Gita'].find(
    (verse) =>
      verse.Chapter.slice(8) === chapterId &&
      verse.Verse.slice(slicingIndex) === verseId
  )


  return (
    <div>
      {verse ? (
        <div>
          <p>{verse['Sanskrit Anuvad']}</p>
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
