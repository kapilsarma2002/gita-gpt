import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export const PATCH = async (request, { params }) => {
  const user = await getUserByClerkID()
 
  const req = await request.json()

  if ('isCompleted' in req) {

    const isCompleted = req.isCompleted

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

  } else if ('isBookmarked' in req) {
    const isBookmarked = req.isBookmarked
    
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
        isBookmarked: true,
      },
    })
  
    return NextResponse.json({ data })
  
  }

  return NextResponse.json({ data: {isCompleted: false, isBookmarked: false} })

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
      isBookmarked: true
    },
  })
  if (!data) return NextResponse.json({ data: {isCompleted: false, isBookmarked: false} })
  return NextResponse.json({ data })
}
