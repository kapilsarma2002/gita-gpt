'use client'
import React, { useEffect, useState, useCallback } from 'react'
import { getStatus, toggleVerseStatus } from '@/utils/api'
import { analyze } from '@/utils/ai'

const VerseComponent = ({ verse, verseId, chapterId }) => {
  const [isCompleted, setIsCompleted] = useState(false)
  const [currentTranslation, setCurrentTranslation] = useState('Hindi')

  useEffect(() => {
    console.log('Inside useEffect')
    const fetchStatus = async () => {
      try {
        const { data } = await getStatus(verseId, chapterId)
        console.log('Data on initial load is:', data)
        setIsCompleted(data.isCompleted)
      } catch (error) {
        console.error('Error fetching status:', error)
        setIsCompleted(false) // Set to a default value in case of an error
      }
    }

    fetchStatus()
  }, [verseId, chapterId])

  const toggleCompletion = async () => {
    try {
      const updatedStatus = !isCompleted
      await toggleVerseStatus(updatedStatus, verseId, chapterId)
      setIsCompleted(updatedStatus) // Update isCompleted locally
      // Fetch the updated status
      const { data } = await getStatus(verseId, chapterId)
      setIsCompleted(data.isCompleted)
    } catch (error) {
      console.error('Error toggling completion:', error)
    }
  }

  useEffect(() => {
    setCurrentTranslation('Hindi')
  }, [verseId, chapterId])

  const handleLanguageChange = (language) => {
    setCurrentTranslation(language)
  }

  return (
    <div className="h-full relative bg-gray-100 dark:bg-gray-800 rounded-lg">
      {verse ? (
        <div className="mb-4 text-center h-full w-full px-8 flex flex-col justify-center items-center">
          <div className="flex flex-col h-[50%] justify-center items-center">
            <p className="lg:text-3xl md:text-2xl sm:text-xl">
              {verse['Sanskrit Anuvad'].split(' । ').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < verse['Sanskrit Anuvad'].split(' । ').length - 1 ? (
                    <span>
                      {' '}
                      । <br />
                    </span>
                  ) : null}
                </span>
              ))}
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <button
              className={`${
                currentTranslation === 'Hindi'
                  ? 'bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
              } px-4 py-2 rounded-lg mr-4 transition duration-300 ease-in-out hover:bg-gray-300 hover:text-gray-800 dark:hover:bg-gray-600 dark:hover:text-gray-300`}
              onClick={() => handleLanguageChange('Hindi')}
            >
              Hindi
            </button>
            <button
              className={`${
                currentTranslation === 'English'
                  ? 'bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
              } px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-gray-300 hover:text-gray-800 dark:hover:bg-gray-600 dark:hover:text-gray-300`}
              onClick={() => handleLanguageChange('English')}
            >
              English
            </button>
          </div>
          <div className="flex flex-col h-[50%] justify-center items-center">
            {currentTranslation === 'Hindi' ? (
              <p className="text-gray-500 dark:text-gray-400 lg:text-2xl md:text-xl sm:text-lg">
                {verse['Hindi Anuvad']}
              </p>
            ) : (
              <p className="text-gray-500 dark:text-gray-400 lg:text-xl md:text-xl sm:text-lg">
                {verse['English Translation']}
              </p>
            )}
          </div>
          <label className="flex items-center cursor-pointer mt-4 pb-8">
            <span className="relative">
              <input
                type="checkbox"
                checked={isCompleted || false}
                onChange={toggleCompletion}
                className="sr-only"
              />
              <span className="block bg-gray-200 dark:bg-gray-700 w-10 h-6 rounded-full shadow-inner"></span>
              <span
                className={`${
                  isCompleted
                    ? 'translate-x-4 bg-green-500 dark:bg-green-300'
                    : 'translate-x-0 bg-gray-500 dark:bg-gray-400'
                } absolute block m-1 w-4 h-4 rounded-full shadow inset-y-0 left-0 transition-transform duration-300 ease-in-out`}
              ></span>
            </span>
            <span className="ml-3 text-gray-700 dark:text-gray-300">
              Mark as {isCompleted ? 'new' : 'done'}
            </span>
          </label>
        </div>
      ) : (
        <p className="text-center text-red-500 dark:text-red-400">
          Verse not found
        </p>
      )}
    </div>
  )
}

export default VerseComponent