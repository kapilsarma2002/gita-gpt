import path from 'path'
import { promises as fs } from 'fs'
import { NextResponse } from 'next/server'


export const GET = async (req, res) => {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'utils')
  //Read the json data file data.json
  const fileContents = await fs.readFile(
    jsonDirectory + '/bhagavad-gita-chapters.json',
    'utf8'
  )
  console.log('data: ', fileContents)
  //Return the content of the data file in json format
  // return res.status(200).json(fileContents)
  return NextResponse.json({chapters: fileContents})
}
