import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'


export const PATCH = async (request, { params }) => {
  const user = await getUserByClerkID()
  const { isCompleted } = await request.json()

  const data = await prisma.verse.upsert({
    where: {
      userId: user.id,
      verseId: +params.verseId,
      chapterId: +params.chapterId,
    },
    create: {
      userId: user.id,
      verseId: +params.verseId,
      chapterId: +params.chapterId,
      isCompleted: isCompleted
    },
    update: {
      isCompleted: isCompleted
    }
  })
  return NextResponse.json({ data: { data } })
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
      isCompleted: true
    }
  })
  return NextResponse.json({ data })
}
