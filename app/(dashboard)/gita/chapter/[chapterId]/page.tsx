import verses from '@/utils/verses'

const Chapter = ({ params }) => {

  const Id = params.chapterId

  const chapterVerses = verses['Bhagavad-Gita'].filter(
    (verse) => verse.Chapter.slice(8) === Id
  )

  return (
    <div>
      <h1>{Id}</h1>
      {chapterVerses.map((verse) => (
        <div key={verse['S.No.']}>
          {/* <h3>{verse.Title}</h3> */}
          <p>{verse.Verse}</p>
          {/* <p>{verse['Sanskrit Anuvad']}</p>
          <p>{verse['Hindi Anuvad']}</p>
          <p>{verse['English Translation']}</p> */}
        </div>
      ))}
    </div>
  )
}

export default Chapter
