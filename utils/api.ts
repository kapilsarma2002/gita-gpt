const createURL = (path) => {
  return window.location.origin + path
}

export const toggleVerseStatus = async (isCompleted, verseId, chapterId) => {
  const res = await fetch(new Request(createURL(`/api/chapter/${chapterId}/verse/${verseId}`)), {
    method: 'PATCH',
    body: JSON.stringify({ isCompleted }),
  })

  if (res.ok) {
    const data = await res.json()
    return data.data
  }
}