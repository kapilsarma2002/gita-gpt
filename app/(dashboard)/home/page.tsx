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
      last: true,
    },
  })
  return status
}

const Home = async () => {
  const { last } = await getStatus()
  const startText = 'Get started'
  const continueText = `Verse ${last}, continue reading`

  //console.log(last)

  return (
    <div
      className="bg-white text-black h-full w-full p-12
      dark:bg-slate-900 dark:text-white/80
    "
    >
      {last == -1 ? (
        <HomeCard text={startText} />
      ) : (
        <HomeCard text={continueText} />
      )}

      <div>
        <ProgressComponent />
      </div>
    </div>
  )
}

export default Home
