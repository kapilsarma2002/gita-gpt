import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'
import { URL } from 'url'

export const GET = async (request) => {
  try {
    const user = await getUserByClerkID()
    const url = new URL(request.url)
    const startDate = url.searchParams.get('startDate')
    const endDate = url.searchParams.get('endDate')
    const result = await prisma.verse.findMany({
      where: {
        userId: user.id,
        completionDate: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      },
      select: {
        completionDate: true,
      },
    })

    const grouped = result.reduce((acc, item) => {
      const date = item.completionDate.toISOString().split('T')[0]
      acc[date] = (acc[date] || 0) + 1
      return acc
    }, {})

    const data = Object.entries(grouped).map(([completionDate, count]) => ({
      completionDate,
      count,
    }))

    data.sort(
      (a, b) =>
        new Date(a.completionDate).getTime() -
        new Date(b.completionDate).getTime()
    )
    return NextResponse.json(data)
  } catch (error) {
    console.error(error)
    return NextResponse.error()
  }
}
