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

  const randomChapterIndex = Math.floor(Math.random() * chapters.length)
  const selectedChapter = chapters[randomChapterIndex]

  const totalVerses = random_chapters[selectedChapter]

  const randomVerseNumber = Math.floor(Math.random() * totalVerses) + 1

  // const verse = verses.filter()

  return {
    chapter: selectedChapter,
    verseNumber: randomVerseNumber,
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
      <div className="flex flex-col items-center justify-around h-full">
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
        <div>
          <h1>daily verse</h1>
        </div>
      </div>

      <div>
        <ProgressComponent />
      </div>
    </div>
  )
}

export default Home
