import verses from '@/utils/verses'
import Link from 'next/link'

const Chapter = ({ params }) => {

  const Id = params.chapterId
  let x
  if (Id.length == 2) {
    x = 9
  } else {
    x = 8
  }

  const chapterVerses = verses['Bhagavad-Gita'].filter(
    (verse) => verse.Chapter.slice(8) === Id
  )

  return (
    <div>
      <h1>{Id}</h1>
      {chapterVerses.map((verse) => (
        <Link href={`/gita/chapter/${Id}/verse/${verse.Verse.slice(x)}`} key={verse['S.No.']}>
          <div >
            {/* <h3>{verse.Title}</h3> */}
            <p>{verse.Verse.slice(x)}</p>
            {/* <p>{verse['Sanskrit Anuvad']}</p>
            <p>{verse['Hindi Anuvad']}</p>
            <p>{verse['English Translation']}</p> */}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Chapter
