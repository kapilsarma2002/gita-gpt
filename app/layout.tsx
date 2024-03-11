import './globals.css'
import type { Metadata } from 'next'
import { Roboto, Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Providers from './providers'

const inter = Roboto({ subsets: ['latin'], weight: ['400'] })
// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gita-gpt',
  description: 'Learn Bhagawad Gita in a new way, integrated with AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
