'use client'

//useSWR allows the use of SWR inside function components
import useSWR from 'swr'

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json())

const GitaPage = () => {

  //Set up SWR to run the fetcher function when calling "/api/chapters"
  //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
  const { data, error } = useSWR('/api/chapters', fetcher)

  //Handle the error state
  if (error) return <div>Failed to load</div>
  //Handle the loading state
  if (!data) return <div>Loading...</div>
  console.log(data.chapters['AdhyayDetails'])
  return (
    <div className="h-full w-full border border-black/10">
      Gita Page : {data.chapters}
    </div>
  )
}

export default GitaPage
