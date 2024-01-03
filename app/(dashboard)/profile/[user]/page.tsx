import DailySubmissionTracker from "@/components/dailyTracker"

const UserPage = ({ params }) => {
  return (
    <div>User : {params.user}
    <DailySubmissionTracker />
    </div>
  )
}

export default UserPage
