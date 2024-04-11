import DailyTracker from '@/components/dailyTracker'

const UserPage = ({ params }) => {
  return (
    <div className="overflow-hidden">
      <div className="h-full w-full flex flex-col items-center justify-start mt-32 gap-20">
        <div className="flex flex-row w-full items-end justify-center">
          <div className="text-5xl bold">{params.user}</div>
          <div className="text-xl">&apos;s verse log</div>
        </div>
        <DailyTracker />
      </div>
    </div>
  )
}

export default UserPage
