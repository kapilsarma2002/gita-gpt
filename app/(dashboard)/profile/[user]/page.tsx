import DailyTracker from '@/components/dailyTracker'

const UserPage = ({ params }) => {
  return (
    <div>
      User : {params.user}
      <div className="h-screen w-screen flex items-center justify-center border border-black">
        <DailyTracker />
      </div>
    </div>
  )
}

export default UserPage
