'use client'
import React, { useState } from 'react'
import verses from '@/utils/verses'
import VerseComponent from '@/components/verseComponent'
import { analyze } from '@/utils/ai'
import Spinner from '@/components/spinner'

const Verse = ({ params }) => {
  const verseId = params.verseId
  const chapterId = params.chapterId
  const slicingIndex = chapterId.length === 2 ? 9 : 8
  const [answer, setAnswer] = useState('')
  const [isFetching, setIsFetching] = useState(false)

  const verse = verses['Bhagavad-Gita'].find(
    (verse) =>
      verse.Chapter.slice(8) === chapterId &&
      verse.Verse.slice(slicingIndex) === verseId
  )

  const analyzeQuery = async (query) => {
    if (query) {
      console.log('User asked : ', query)
      setIsFetching(true)
      const res = await analyze(verse, query)
      setAnswer(res.choices[0].message.content)
      setIsFetching(false)
      console.log('AI says: ', res.choices[0].message.content)
    }
  }

  const handleBlur = (event) => {
    const text = event.target.value // Accessing the value of the textarea
    analyzeQuery(text) // Analyze the text content
  }

  return (
    <div className="bg-white dark:bg-slate-900 text-black dark:text-white h-[calc(100vh-80px)] w-screen fixed flex flex-col">
      <header className="py-4 px-8 text-center">
        <h1 className="text-3xl">
          Chapter {chapterId} Verse {verseId}
        </h1>
      </header>
      <main className="h-[calc(100vh - 120px)] w-full container mx-auto pb-4 flex-grow flex">
        <div className="h-full w-[60%] p-4">
          <VerseComponent
            verse={verse}
            verseId={verseId}
            chapterId={chapterId}
          />
        </div>
        <div className="w-[40%] p-4 flex flex-col justify-between">
          <textarea
            className="w-full h-1/3 bg-gray-100 dark:bg-gray-800 text-black dark:text-gray-400 p-4 rounded-lg mb-4 resize-none"
            placeholder="Ask your question here"
            onBlur={handleBlur}
          ></textarea>
          <div className="relative left-0 top-0 bg-gray-100 dark:bg-gray-800 text-black dark:text-gray-400 py-2 pl-2 rounded-t-lg">
            {isFetching ? (
              <Spinner />
            ) : (
              <div className="w-[16px] h-[16px] rounded-full bg-green-500 dark:bg-green-300"></div>
            )}
          </div>
          <textarea
            className="w-full h-2/3 bg-gray-100 dark:bg-gray-800 text-black dark:text-gray-400 p-4 resize-none"
            placeholder="AI says..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          ></textarea>
        </div>
      </main>
    </div>
  )
}

export default Verse
