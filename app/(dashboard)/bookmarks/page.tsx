import React from 'react'

const BookmarkList = ({ bookmarks }) => {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Bookmarks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {bookmarks.map((bookmark, index) => (
          <div key={index} className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-2">{bookmark.title}</h2>
            <p className="text-gray-600">{bookmark.url}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookmarkList
