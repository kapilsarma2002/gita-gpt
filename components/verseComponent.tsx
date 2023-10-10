'use client'
import React, { useState } from 'react'

const VerseComponent = ({ verse }) => {
  const [currentTranslation, setCurrentTranslation] = useState('Hindi') // Default to Hindi

  return (
    <div className="h-full">
      {verse ? (
        <div className="mb-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-center h-full w-full px-8">
          <div className="flex justify-center pt-4">
            <button
              className={`${
                currentTranslation === 'Hindi'
                  ? 'bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
              } px-4 py-2 rounded-lg mr-4 transition duration-300 ease-in-out hover:bg-gray-300 hover:text-gray-800 dark:hover:bg-gray-600 dark:hover:text-gray-300`}
              onClick={() => setCurrentTranslation('Hindi')}
            >
              Hindi Anuvad
            </button>
            <button
              className={`${
                currentTranslation === 'English'
                  ? 'bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
              } px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-gray-300 hover:text-gray-800 dark:hover:bg-gray-600 dark:hover:text-gray-300`}
              onClick={() => setCurrentTranslation('English')}
            >
              English Translation
            </button>
          </div>
          <p className="lg:text-3xl md:text-2xl sm:text-xl justify-center items-center p-12">
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
          <p className="text-gray-500 dark:text-gray-400 lg:text-2xl md:text-xl sm:text-lg">
            {currentTranslation === 'Hindi' ? verse['Hindi Anuvad'] : null}
          </p>
          <p className="text-gray-500 dark:text-gray-400 lg:text-xl md:text-xl sm:text-lg">
            {currentTranslation === 'English'
              ? verse['English Translation']
              : null}
          </p>
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
