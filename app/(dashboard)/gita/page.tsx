'use client'

import React from 'react'
import chapters from '@/utils/chapters'
import Link from 'next/link'

const GitaPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {chapters.AdhyayDetails.map((chapter) => (
          <Link href={`/gita/chapter/${chapter.CHAPTER}`} key={chapter.CHAPTER}>
            <div className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow-md dark:shadow-slate-600 transition duration-300 ease-in-out hover:bg-blue-100 dark:hover:bg-blue-700 dark:text-white">
              <h2 className="text-xl text-black dark:text-white font-semi-bold mb-2">
                {chapter.CHAPTER}. {chapter['ADHYAY NAME']}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                No. of Shlokas: {chapter['NO. OF SHLOKAS']}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Krishna: {chapter['KRISHNA']}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Arjun: {chapter['ARJUN']}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Sanjay: {chapter['SANJAY']}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default GitaPage
