import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export const GET = async (request, { params }) => {
  const user = await getUserByClerkID()
  const data = await prisma.verse.findFirst({
    where: {
      userId: user.id,
    },
    select: {
      isBookmarked: true,
    },
  })
  if (!data) return NextResponse.json({ data: { isBookmarked: false } })
  return NextResponse.json({ data })
}

export const PATCH = async (request, { params }) => {
    const user = await getUserByClerkID()
    const { isBookmarked } = await request.json()

    if (isBookmarked) {
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
        isBookmarked: isBookmarked,
        isCompleted: false,
      },
      update: {
        isBookmarked: isBookmarked,
      },
      select: {
        isCompleted: true,
      },
    })

    return NextResponse.json({ data })
}