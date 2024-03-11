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
      console.log('completed verses : ', completedVerses)
      setCount(completedVerses.data)
    }
    getVerses()
  }, [])

  return (
    <div>
      <div style={{ width: 300, height: 300 }}>
        <CircularProgressbar
          strokeWidth={5}
          value={Math.floor((count / 700) * 100)}
          text={`${count} / 700`}
          styles={buildStyles({
            textSize: '15px',
          })}
        />
      </div>
    </div>
  )
}

export default ProgressComponent
