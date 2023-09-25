import { UserButton } from '@clerk/nextjs'
import NavBar from '@/components/navBar'
import Link from 'next/link'
import Image from 'next/image'
import { getUserByClerkID } from '@/utils/auth'
import ThemeSwitcher from '@/components/themeSwitcher'

const HomeLayout = async ({ children }: any) => {
  const user = await getUserByClerkID()

  return (
    <div className="h-screen w-screen relative bg-white text-black dark:bg-slate-900 dark:text-white/80">
      <div className="h-full">
        <header className="h-[60px] sm:h-[80px] md:h-[100px] border-b border-black/5 flex flex-row items-center justify-between dark:border-white/20">
          <div className="pl-6 text-lg sm:text-xl md:text-2xl">Logo</div>
          <div>
            <NavBar />
          </div>
          <div className="h-full w-[100px] gap-4 px-6 flex items-center justify-end">
            <div className="text-base sm:text-lg md:text-xl">
              <Link href={`/profile/${user.userName}`}>{user.userName}</Link>
            </div>
            <div className="h-[30px] w-[30px]">
              <ThemeSwitcher />
            </div>
            <UserButton />
          </div>
        </header>
        <div className="h-[calc(100vh-60px)] sm:h-[calc(100vh-80px)] md:h-[calc(100vh-100px)]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default HomeLayout
