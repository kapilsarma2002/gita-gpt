import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export const GET = async (request, { params }) => {
  const user = await getUserByClerkID()
  const data = await prisma.verse.count({
    where: {
      userId: user.id,
      isCompleted: true
    },
  })
  return NextResponse.json({ data })
}
