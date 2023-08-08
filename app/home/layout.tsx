import { UserButton } from '@clerk/nextjs'
import NavBar from '@/components/navBar'
import Link from 'next/link'
import Image from 'next/image'
import { getUserByClerkID } from '@/utils/auth'

const HomeLayout = async ({ children }: any) => {

  const user = await getUserByClerkID()

  return (
    <div className="h-screen w-screen relative bg-white text-black">
      {/* <aside className="absolute h-full w-[200px] pl-4 top-0 left-0 border-r border-black/10">
        <ul>
          {links.map((link) => (
            <li key={link.href} className="px-2 py-6 text-xl">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </aside> */}
      <div className="h-full">
        <header className="h-[60px] border-b border-black/5 flex flex-row items-center justify-between">
          <div className="pl-6">Logo</div>
          <div><NavBar/></div>
          <div className="h-full w-[60px] gap-4 px-6 flex items-center justify-end">
            <div className='text-xl'>
              <Link href={`/profile/${user.userName}`}>Profile</Link>
            </div>
            <UserButton />
          </div>
        </header>
        <div className="h-[calc(100vh-60px)]">{children}</div>
      </div>
    </div>
  )
}

export default HomeLayout
