'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import ThemeSwitcher from '@/components/themeSwitcher'

const links = [
  { href: '/home', label: 'Home' },
  { href: '/gita', label: 'Gita' },
  { href: '/chat', label: 'Chat' },
  { href: '/bookmarks', label: 'Bookmarks' },
  { href: '/profile', label: 'Profile' },
  { href: '/about', label: 'About' },
]

const NavBar = ({ user }) => {
  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const userProfile = links.find((link) => link.label === 'Profile')
  userProfile.href = `/profile/${user.userName}`

  return (
    <div className="relative flex justify-between">
      <div className="lg:flex items-center gap-4 px-6">
        <div className="pl-6 lg:pl-8">Gita</div>
      </div>
      <div className="lg:hidden px-3 py-2">
        <button
          onClick={toggleDropdown}
          className="text-xl text-black/80 dark:text-white/80"
        >
          ☰ Menu
        </button>
      </div>
      <div className="hidden lg:flex lg:flex-row gap-2 lg:gap-5 lg:text-xl px-3 pb-2 text-base lg:text-black/70 dark:text-white/80">
        {links.map((link) => (
          <Link href={link.href} key={link.label}>
            <div className="pb-1 transition-all duration-200 ease-in-out border-b-2 border-transparent hover:border-blue-500 hover:font-bold">
              {link.label}
            </div>
          </Link>
        ))}
      </div>
      <div className="lg:flex items-center gap-4 px-6 pb-4">
        <div className="text-lg lg:text-xl">
          <ThemeSwitcher />
        </div>
        {typeof window !== 'undefined' && window.innerWidth >= 768 ? (
          <UserButton />
        ) : null}
      </div>
      {showDropdown && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border border-black/5 z-10">
          {links.map((link) => (
            <Link href={link.href} key={link.label}>
              <div className="pl-10 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-900">
                {link.label}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default NavBar
