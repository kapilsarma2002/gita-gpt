'use client'
import { getVerseLog } from '@/utils/api'
import React, { useEffect, useState } from 'react'
import Tooltip from '@uiw/react-tooltip'
import HeatMap from '@uiw/react-heat-map'

const DailyTracker = () => {
  const [data, setData] = useState([])
  const [startDate, setStartDate] = useState(new Date().toISOString())
  const [endDate, setEndDate] = useState(new Date().toISOString())

  useEffect(() => {
    const fetchData = async () => {
      const currentDate = new Date()
      const endOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        1
      )
      const startOfMonthLastYear = new Date(
        currentDate.getFullYear() - 1,
        currentDate.getMonth() + 1,
        2
      )

      const formattedStart = startOfMonthLastYear.toISOString()
      const formattedEnd = endOfMonth.toISOString()

      setEndDate(formattedEnd)
      setStartDate(formattedStart)

      try {
        const res = await getVerseLog(formattedStart, formattedEnd)
        console.log(res)
        const formattedData = res.map((item) => ({
          date: item.completionDate,
          count: item.count,
        }))
        console.log(formattedData)
        setData(formattedData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='overflow-y-hidden'>
      <HeatMap
        rectSize={20}
        space={5}
        value={data}
        width={1400}
        height={250}
        startDate={new Date(startDate)}
        endDate={new Date(endDate)}
        rectRender={(props, data) => {
          if (!data.count) return <rect {...props} />
          return (
            <Tooltip
              placement="top"
              content={`date : ${data.date}, count: ${data.count || 0}`}
            >
              <rect {...props} />
            </Tooltip>
          )
        }}
      />
      <div>*This is the count of verses that are completed by the user on that particular day</div>
    </div>
  )
}

export default DailyTracker
