'use client'
import { useEffect, useState } from 'react'
import { getCompletedVerses } from '@/utils/api'
import { CircularProgressbar } from 'react-circular-progressbar'
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
      PROGRESS : {Math.floor((count / 700) * 100)}
      <div style={{ width: 200, height: 200 }}>
        <CircularProgressbar
          value={Math.floor((count / 700) * 100)}
          text={`${count} / 700`}
        />
      </div>
    </div>
  )
}

export default ProgressComponent
