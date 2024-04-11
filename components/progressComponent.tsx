'use client'
import { useEffect, useState } from 'react'
import { getCompletedVerses } from '@/utils/api'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ProgressComponent = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const getVerses = async () => {
      const completedVerses = await getCompletedVerses()
      // console.log('completed verses : ', completedVerses)
      setCount(completedVerses.data)
    }
    getVerses()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="text-3xl text-gray-600 dark:text-white/80">
        Progress tracker
      </div>
      <div style={{ width: 300, height: 300 }}>
        <CircularProgressbar
          strokeWidth={5}
          value={Math.floor((count / 700) * 100)}
          text={`${count} / 700`}
          styles={buildStyles({
            textSize: '15px',
            textColor: '#2196F3',
            pathColor: '#2196F3',
          })}
        />
      </div>
    </div>
  )
}

export default ProgressComponent
