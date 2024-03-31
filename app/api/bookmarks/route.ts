import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export const GET = async (request, { params }) => {
  const user = await getUserByClerkID()
  const data = await prisma.verse.findMany({
    where: {
      userId: user.id,
      isBookmarked: true,
    },
    select: {
      chapterId: true,
      verseId: true,
    },
  })
  if (!data) return NextResponse.json({ data: [] })
  return NextResponse.json({ data })
}