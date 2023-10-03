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
    <div className="bg-white text-black min-h-screen dark:bg-slate-900 dark:text-white">
      <header className="bg-white dark:bg-slate-900 py-4 px-8">
        <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-center">
          Chapter {chapterId}
        </h1>
      </header>
      <main className="container mx-auto py-8">
        {chapterVerses.map((verse) => (
          <Link
            href={`/gita/chapter/${chapterId}/verse/${verse.Verse.slice(
              slicingIndex
            )}`}
            key={verse['S.No.']}
          >
            <div className="bg-gray-100 dark:bg-slate-900/50 p-4 mb-4 shadow-md dark:shadow-md dark:shadow-slate-600 transition duration-300 ease-in-out hover:bg-blue-100 dark:hover:bg-blue-700 rounded-lg">
              <p className="text-lg">{verse.Verse.slice(slicingIndex)}</p>
              <p className="text-gray-800 dark:text-gray-200 lg:text-2xl md:text-2xl sm:text-xl text-center">{verse['Sanskrit Anuvad']}</p>
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
