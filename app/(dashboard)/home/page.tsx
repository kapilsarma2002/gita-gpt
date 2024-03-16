import HomeCard from '@/components/homeCard'
import { getCompletedVerses } from '@/utils/api'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
import random_chapters from '@/utils/random'
import verses from '@/utils/verses'
import ProgressComponent from '@/components/progressComponent'

const getStatus = async () => {
  const user = await getUserByClerkID()
  const status = await prisma.user.findFirst({
    where: {
      id: user.id,
    },
    select: {
      lastChapter: true,
      lastVerse: true,
    },
  })
  return status
}

const getRandomVerse = () => {
  const chapters = Object.keys(random_chapters)
  const randomChapterIndex = Math.ceil(Math.random() * chapters.length)
  const selectedChapter = chapters[randomChapterIndex - 1]
  // console.log(randomChapterIndex)
  // console.log(selectedChapter)

  const totalVerses = random_chapters[selectedChapter]

  const randomVerseNumber = Math.ceil(Math.random() * totalVerses)
  const randomVerse = `Verse ${randomChapterIndex}.${randomVerseNumber}`
  // console.log(randomVerse)

  const chapter = verses[selectedChapter].filter(
    (verse) => verse.Verse == randomVerse
  )
  // console.log(verses[selectedChapter])
  // console.log(chapter[0]['English Translation'])

  return {
    verseNo: randomVerse,
    verse: chapter[0]['English Translation'],
  }
}

const Home = async () => {
  const { lastChapter, lastVerse } = await getStatus()
  const randomVerse = getRandomVerse()
  const startText = 'Get started'
  const continueText = `Chapter ${lastChapter} Verse ${lastVerse}, continue reading`

  //console.log(last)

  return (
    <div
      className="bg-white text-black h-full w-full p-12
      dark:bg-slate-900 dark:text-white/80 flex flex-row items-center justify-around"
    >
      <div className="w-2/3 flex flex-col items-left pl-16 justify-around h-full">
        {/* last verse read */}
        <div>
          {lastVerse == -1 || lastChapter == -1 ? (
            <HomeCard
              text={startText}
              verseId={lastVerse}
              chapterId={lastChapter}
            />
          ) : (
            <HomeCard
              text={continueText}
              verseId={lastVerse}
              chapterId={lastChapter}
            />
          )}
        </div>

        {/* daily verse */}
        <div className="w-95% mx-auto">
          <div className="text-3xl mb-4 font-semi-bold text-black dark:text-white">
            Random verse
          </div>
          <h1 className="text-2xl text-gray-800 dark:text-white/80">
            {randomVerse.verseNo}
          </h1>
          <h2 className="text-lg text-gray-700 dark:text-gray-200">
            {randomVerse.verse}
          </h2>
        </div>
      </div>

      <div className="hidden sm:block lg:w-1/3">
        <ProgressComponent />
      </div>
    </div>
  )
}

export default Home
