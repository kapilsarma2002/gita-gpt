import HomeCard from '@/components/homeCard'
import { getCompletedVerses } from '@/utils/api'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
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

const Home = async () => {
  const { lastChapter, lastVerse } = await getStatus()
  const startText = 'Get started'
  const continueText = `Chapter ${lastChapter} Verse ${lastVerse}, continue reading`

  //console.log(last)

  return (
    <div
      className="bg-white text-black h-full w-full p-12
      dark:bg-slate-900 dark:text-white/80 flex flex-row items-center justify-around"
    >
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

      <div>
        <ProgressComponent />
      </div>
    </div>
  )
}

export default Home
