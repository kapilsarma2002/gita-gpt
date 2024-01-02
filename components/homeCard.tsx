'use client'

import { FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'

const HomeCard = ({ text, verseId, chapterId }) => {
  let link

  if (text == 'Get started') link = '/gita'
  else link = `/gita/chapter/${chapterId}/verse/${verseId}`

  return (
    <div className="h-[200px] w-[520px] text-2xl border border-black/10 drop-shadow-md hover:drop-shadow-2xl rounded-lg  dark:border-white/20">
      <Link
        href={link}
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
