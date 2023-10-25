const createURL = (path) => {
  return window.location.origin + path
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
    console.log('res is : ', data)
    if (data) return data
  }
  //return toggleVerseStatus(isCompleted, verseId, chapterId)
}

export const toggleVerseStatus = async (isCompleted, verseId, chapterId) => {
  const res = await fetch(new Request(createURL(`/api/chapter/${chapterId}/verse/${verseId}`)), {
    method: 'PATCH',
    body: JSON.stringify({ isCompleted }),
  })
  if (res.ok) {
    const data = await res.json()
    console.log('PATCH reponse is : ', data.data)
    return data.data
  }
}