import React from 'react'
import verses from '@/utils/verses'
import VerseComponent from '@/components/verseComponent'

const Verse = ({ params }) => {
  const verseId = params.verseId
  const chapterId = params.chapterId
  const slicingIndex = chapterId.length === 2 ? 9 : 8

  const verse = verses['Bhagavad-Gita'].find(
    (verse) =>
      verse.Chapter.slice(8) === chapterId &&
      verse.Verse.slice(slicingIndex) === verseId
  )

  return (
    <div className="bg-white dark:bg-slate-900 text-black dark:text-white h-[calc(100vh-80px)] w-screen fixed flex flex-col">
      <header className="bg-gray-200 dark:bg-gray-800 py-4 px-8 text-center">
        <h1 className="text-3xl">
          Chapter {chapterId} Verse {verseId}
        </h1>
      </header>
      <main className="h-[calc(100vh - 120px)] w-full container mx-auto py-8 flex-grow flex">
        <div className="h-full w-[60%] p-4">
          <VerseComponent verse={verse} />
        </div>
        <div className="w-[40%] p-4 flex flex-col justify-between">
          <textarea
            className="w-full h-1/3 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 p-2 rounded-lg mb-4"
            placeholder="Ask your question here"
          ></textarea>
          <textarea
            className="w-full h-2/3 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 p-2 rounded-lg"
            placeholder="AI says..."
          ></textarea>
        </div>
      </main>
    </div>
  )
}

export default Verse
