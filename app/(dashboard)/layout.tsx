import NavBar from '@/components/navBar'
import { getUserByClerkID } from '@/utils/auth'

const HomeLayout = async ({ children }: any) => {
  const user = await getUserByClerkID()

  return (
    <div className="h-screen w-screen relative bg-white text-black dark:bg-slate-900 dark:text-white/80">
      <div className="h-full w-full pt-4 pb-6">
        <div>
          <NavBar user = {user} />       
        </div>
        <div className="h-[calc(100vh-60px)] lg:h-[calc(100vh-80px)]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default HomeLayout
