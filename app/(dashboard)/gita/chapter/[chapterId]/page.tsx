import verses from '@/utils/verses'
import Link from 'next/link'

const Chapter = ({ params }) => {
  const chapterId = params.chapterId
  let slicingIndex
  if (chapterId.length == 2) {
    slicingIndex = 9
  } else {
    slicingIndex = 8
  }

  // Filter verses for the selected chapter
  const chapterVerses = verses['Bhagavad-Gita'].filter(
    (verse) => verse.Chapter.slice(8) === chapterId
  )

  return (
    <div className="bg-white text-black min-h-screen">
      <header className="bg-gray-200 py-4 px-8">
        <h1 className="text-3xl">{chapterId}</h1>
      </header>
      <main className="container mx-auto py-8">
        {chapterVerses.map((verse) => (
          <Link
            href={`/gita/chapter/${chapterId}/verse/${verse.Verse.slice(
              slicingIndex
            )}`}
            key={verse['S.No.']}
          >
            <div className="bg-gray-100 p-4 mb-4 rounded-lg">
              <p className="text-lg">{verse.Verse.slice(slicingIndex)}</p>
              <p className="text-gray-500">{verse['Sanskrit Anuvad']}</p>
              {/* <p>{verse['Hindi Anuvad']}</p>
              <p>{verse['English Translation']}</p> */}
            </div>
          </Link>
        ))}
      </main>
    </div>
  )
}

export default Chapter