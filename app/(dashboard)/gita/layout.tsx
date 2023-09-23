'use client'

import { usePathname, useRouter } from 'next/navigation'

const GitaLayout = ({ children }) => {
  const router = useRouter()
  const pathName = usePathname()
  const isGitaPage = pathName === '/gita'

  return (
    <div className="h-full w-full overflow-y-auto">
      {isGitaPage ? (
        <h1 className="text-3xl font-bold mb-4 pt-12 pl-16">Bhagavad Gita</h1>
      ) : (
        <button onClick={() => router.back()}>Back</button>
      )}{' '}
      {children}
    </div>
  )
}

export default GitaLayout
