import React from 'react'
import verses from '@/utils/verses'

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
    <div className="bg-white dark:bg-slate-900 text-black dark:text-white h-screen w-screen flex flex-col">
      <header className="h-[70px] bg-gray-200 dark:bg-gray-800 py-4 px-8 text-center">
        <h1 className="text-3xl">
          Chapter {chapterId} Verse {verseId}
        </h1>
      </header>
      <main className="h-[calc(100vh - 120px)] w-full container mx-auto py-8 flex-grow flex">
        <div className="h-full w-50% p-4">
          {verse ? (
            <div className="mb-4 rounded-lg bg-gray-100 flex flex-col dark:bg-gray-800 text-center h-full w-full">
              <p className="lg:text-3xl md:text-2xl sm:text-xl justify-center items-center p-12">
                {verse['Sanskrit Anuvad'].split(' । ').map((line, index) => (
                  <span key={index}>
                    {line}
                    {index <
                    verse['Sanskrit Anuvad'].split(' । ').length - 1 ? (
                      <span>
                        {' '}
                        । <br />
                      </span>
                    ) : null}
                  </span>
                ))}
              </p>
              <p className="text-gray-500 dark:text-gray-400 lg:text-2xl md:text-xl sm:text-lg">
                {verse['Hindi Anuvad']}
              </p>
              <p className="text-gray-500 dark:text-gray-400 lg:text-xl md:text-xl sm:text-lg">
                {verse['English Translation']}
              </p>
            </div>
          ) : (
            <p className="text-center text-red-500 dark:text-red-400">
              Verse not found
            </p>
          )}
        </div>
        <div className="w-50% p-4 flex flex-col justify-between">
          <textarea
            className="w-full h-1/2 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 p-2 rounded-lg mb-4"
            placeholder="Top Text Area"
          ></textarea>
          <textarea
            className="w-full h-1/2 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 p-2 rounded-lg"
            placeholder="Bottom Text Area"
          ></textarea>
        </div>
      </main>
    </div>
  )
}

export default Verse
