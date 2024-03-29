'use client'

import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const GitaLayout = ({ children }) => {
  const router = useRouter()
  const { resolvedTheme } = useTheme()
  const pathName = usePathname()
  const isGitaPage = pathName === '/gita'

  return (
    <div className="h-full w-full overflow-y-auto">
      {isGitaPage ? (
        <div className="flex flex-row items-center justify-center">
          <h1 className="text-3xl font-semi-bold mb-4 pl-16 py-8">
            Bhagavad Gita
          </h1>
        </div>
      ) : (
        <div
          className="pl-[180px] cursor-pointer"
          onClick={() => router.back()}
        >
          <Image
            src={
              resolvedTheme === 'dark'
                ? '/arrow-left-white.svg'
                : '/arrow-left.svg'
            }
            height={32}
            width={28}
            alt="back"
          />
        </div>
      )}{' '}
      {children}
    </div>
  )
}

export default GitaLayout
