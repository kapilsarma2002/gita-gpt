const createURL = (path) => {
  return window.location.origin + path
}

export const getCompletedVerses = async () => {
  const res = await fetch(new Request(createURL(`/api/home`)), {
    method: 'GET',
  })
  if (res.ok) {
    const data = await res.json()
    console.log('GET completed verses : ', data)
    return data
  }
}

export const getBookmarkedVerses = async () => {
  const res = await fetch(new Request(createURL(`/api/bookmarks`)), {
    method: 'GET',
  })
  if (res.ok) {
    const data = await res.json()
    console.log('GET bookmarked verses : ', data)
    return data
  }
}

export const getStatus = async (verseId, chapterId) => {
  const res = await fetch(
    new Request(createURL(`/api/chapter/${chapterId}/verse/${verseId}`)),
    {
      method: 'GET',
    }
  )
  if (res.ok) {
    const data = await res.json()
    if (data) return data
  }
  //return toggleVerseStatus(isCompleted, verseId, chapterId)
}

export const toggleBookmarkStatus = async (
  isBookmarked,
  verseId,
  chapterId
) => {
  const res = await fetch(
    new Request(createURL(`/api/chapter/${chapterId}/verse/${verseId}`)),
    {
      method: 'PATCH',
      body: JSON.stringify({ isBookmarked }),
    }
  )
  console.log('res is : ', res)
  if (res.ok) {
    const data = await res.json()
    console.log('PATCH reponse is : ', data.data)
    return data.data
  } else {
    console.log('PATCH lo error ra kukka')
  }
}

export const toggleVerseStatus = async (isCompleted, verseId, chapterId) => {
  const res = await fetch(
    new Request(createURL(`/api/chapter/${chapterId}/verse/${verseId}`)),
    {
      method: 'PATCH',
      body: JSON.stringify({ isCompleted }),
    }
  )
  console.log('res is : ', res)
  if (res.ok) {
    const data = await res.json()
    console.log('PATCH reponse is : ', data.data)
    return data.data
  } else {
    console.log('PATCH lo error ra kukka')
  }
}
