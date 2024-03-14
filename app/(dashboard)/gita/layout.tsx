'use client'

import { usePathname, useRouter } from 'next/navigation'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const GitaLayout = ({ children }) => {
  const router = useRouter()

  const pathName = usePathname()
  const isGitaPage = pathName === '/gita'

  return (
    <div className="h-full w-full overflow-y-auto">
      {isGitaPage ? (
        <h1 className="text-3xl font-bold mb-4 pl-16">Bhagavad Gita</h1>
      ) : (
        <div className="px-32 pt-4" onClick={() => router.back()}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="2x"
            className="cursor-pointer scale-75 transform transition-transform duration-500 ease-in-out hover:scale-100"
          />
        </div>
      )}{' '}
      {children}
    </div>
  )
}

export default GitaLayout
