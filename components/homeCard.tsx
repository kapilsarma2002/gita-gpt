'use client'

import { FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'

const getVerse = (text) => {
  let ans

  return 1
} 

const HomeCard = ({ text }) => {

  let link

  if (text == 'Get started') link = '/gita'
  else {
    const verse = getVerse(text)
    link = `/gita/${verse}`
  }

  return (
    <div className="h-[200px] w-[400px] text-2xl border border-black/10 drop-shadow-md hover:drop-shadow-2xl  dark:border-white/20">
      <Link
        href="/gita"
        className="flex flex-row items-center justify-start pl-8 pt-8 gap-3"
      >
        <div>{text}</div>
        <div className="cursor-pointer hover:pl-0.5">
          <FiArrowRight />
        </div>
      </Link>
    </div>
  )
}

export default HomeCard
