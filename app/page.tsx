import { auth } from '@clerk/nextjs'
import Link from 'next/link'

export default async function Home() {
  const { userId } = await auth()
  let href = userId ? '/home' : '/new-user'

  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center text-black">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4">Learn Gita using AI.</h1>
        <p className="text-2xl text-black/60 mb-4">
          This is the best app for tracking your gita learning process. All you
          have to do is be consistent.
        </p>
        <div>
          <Link href={href}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-xl">
              get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
