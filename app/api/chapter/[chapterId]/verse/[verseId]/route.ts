import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export const PATCH = async (request, { params }) => {
  const user = await getUserByClerkID()
  const { isCompleted } = await request.json()
  const userId = user.id
  const verseId = +params.verseId
  const chapterId = +params.chapterId

  // Check if a record with the same userId, verseId, and chapterId already exists
  const existingVerse = await prisma.verse.findUnique({
    where: { userId, verseId, chapterId },
  })

  if (existingVerse) {
    // If it exists, update the existing record
    const data = await prisma.verse.update({
      where: { userId, verseId, chapterId },
      data: { isCompleted },
      select: {
        isCompleted: true,
      },
    })
    return NextResponse.json({ data })
  } else {
    // If it doesn't exist, insert a new record
    const data = await prisma.verse.create({
      data: {
        userId,
        verseId,
        chapterId,
        isCompleted,
      },
      select: {
        isCompleted: true,
      },
    })
    return NextResponse.json({ data })
  }
}

export const GET = async (request, { params }) => {
  const user = await getUserByClerkID()
  const data = await prisma.verse.findFirst({
    where: {
      userId: user.id,
      verseId: +params.verseId,
      chapterId: +params.chapterId,
    },
    select: {
      isCompleted: true,
    },
  })
  return NextResponse.json({ data })
}
