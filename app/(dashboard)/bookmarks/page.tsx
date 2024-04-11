'use client'
import React, { useState, useEffect } from 'react'
import { getBookmarkedVerses } from '@/utils/api'
import Link from 'next/link'


const BookmarkList = () => {
  const [verses, setVerses] = useState(new Set())

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const { data } = await getBookmarkedVerses()
        // console.log('Bookmarked verses on initial load are:', data)
        const newVerses = new Set()
        data.forEach(({ chapterId, verseId }) => {
          newVerses.add(JSON.stringify({ chapterId, verseId }))
        })
        setVerses(newVerses)
        // console.log(verses)
      } catch (error) {
        console.error('Error fetching bookmarks:', error)
      }
    }

    fetchBookmarks()
  }, [])

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Bookmarks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from(verses).map((verse, index) => (
          <div key={index} className="p-4 bg-white shadow rounded-lg">
            <Link
              href={`/gita/chapter/${JSON.parse(verse.toString()).chapterId}/verse/${JSON.parse(verse.toString()).verseId}`}
            >
            <h2 className="text-lg font-semibold mb-2">
              Chapter : {JSON.parse(verse.toString()).chapterId}
            </h2>
            <p className="text-gray-600 text-md font-semibold">
              Verse : {JSON.parse(verse.toString()).verseId}
            </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookmarkList
