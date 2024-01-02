import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export const PATCH = async (request, { params }) => {
  const user = await getUserByClerkID()
  const { isCompleted } = await request.json()

  if(isCompleted) {
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        lastChapter: +params.chapterId,
        lastVerse: +params.verseId,
      },
    })
  }


  const data = await prisma.verse.upsert({
    where: {
      userId_verseId_chapterId: {
        userId: user.id,
        verseId: +params.verseId,
        chapterId: +params.chapterId,
      },
    },
    create: {
      userId: user.id,
      verseId: +params.verseId,
      chapterId: +params.chapterId,
      isCompleted: isCompleted,
    },
    update: {
      isCompleted: isCompleted,
    },
    select: {
      isCompleted: true,
    },
  })

  return NextResponse.json({ data })
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
  if (!data) return NextResponse.json({ data: {isCompleted: false} })
  return NextResponse.json({ data })
}
