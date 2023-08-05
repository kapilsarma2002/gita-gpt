'use client'

import { FiArrowRight } from 'react-icons/fi'

const HomeCard = ({ text }) => {
  return (
    <div className="h-[200px] w-[400px] text-2xl border border-black/10 drop-shadow-md hover:drop-shadow-2xl flex flex-row items-center justify-start pl-8 gap-3">
      <div>{text}</div>
      <div className=''>
        <FiArrowRight />
      </div>
    </div>
  )
}

export default HomeCard
